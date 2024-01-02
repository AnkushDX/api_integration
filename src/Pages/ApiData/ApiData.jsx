import React, { useEffect, useState } from "react";
import Style from "../ApiData/ApiData.module.css";
import axios from "axios";
export default function ApiData() {
  const [myData, setmyData] = useState([]);
  const [perPage, setPerpage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchInput, setsearchInput] = useState('');
  const [noData, setNoData]= useState(false)


  
 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>
       setmyData(res.data));
  }, []);

  const indexLast = currentPage * perPage;
  const indeFpage = indexLast - perPage;
  const currentpostPage = myData.slice(indeFpage, indexLast);

  const Nextpage = () => {
    const lastpage = Math.ceil(myData.length / perPage);
    if (currentPage < lastpage) {
      var count = currentPage + 1;
      setcurrentPage(count);
      
    }
  };
  const Prepage = () => {
    if (currentPage > 1) {
      var count = currentPage - 1;
      setcurrentPage(count);
    }
  };
    const gotoLpage = () => {
    const lastpage = Math.ceil(myData.length / perPage);
    setcurrentPage(lastpage);
  };
    const gotoFpage = () => {
  setcurrentPage(1)
  };
//.....................onclickButton..........
const handlSearch =(e)=>{
  const searchTerm =e.target.value.toLowerCase()
  setsearchInput(searchTerm);
  console.log(searchTerm)
}

const handleClick=()=>{
  const searchTerm = searchInput.toLowerCase();
if(searchTerm ===''){
  axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>setmyData(res.data));
      setNoData(false);
   
}else{
   const filterResult= myData.filter((post)=>
    post.id.toString().includes(searchTerm)||
    post.title.toLowerCase().includes(searchTerm)
  )
  if(filterResult.length === 0){
    setNoData(true);
  }else{
    setNoData(false);
    setmyData(filterResult)
    setPerpage(1)
  }
}
}


// ............onChange.............

  //    const handleSearch = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   setsearchInput(searchTerm);

  //   if (searchTerm ===''){
  //     axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setmyData(res.data));
  //     setNoData(false)
      
  //   }else{
  //     const filterResult = myData.filter((post) =>
  //     post.id.toString().includes(searchTerm) ||
  //     post.title.toLowerCase().includes(searchTerm)
  // );
  //    if(filterResult.length === 0){
  //     setNoData(true)
  //    }else{
  //     setNoData(false)
  //     setmyData(filterResult);
  //    }   
  //   }
  // };

  
  return (
    <>
      <div className={"container"}>
        <div className={Style.apidata}>
          <h3 className={Style.heading}>All Api Data Page</h3>
         <div className={Style.searchBar}>
          <input type="text" id="searchInput" placeholder="Search by i'd and title"value={searchInput} onChange={handlSearch} />
         <button type="button"   onClick={handleClick}>search</button>
         </div>
          {/* <div className={Style.searchBar}>
            <label htmlFor="">Search</label>
            <input type="text" id="searchInput" placeholder="Search here" value={searchInput} onChange={handleSearch}/><span></span>
      
          </div> */}
          {noData ? (
            <h3 className={Style.noDataPage}>No Data Found.</h3>
          ):(
            <table className={Style.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
              </tr>
            </thead>
            <tbody>
              {currentpostPage.map((post) => {
                const { id, title, body } = post;
                return (
                  <tr className={Style.databorder} key={id}>
                    <td className={Style.thborder}>{id}</td>
                    <td className={Style.thborder}>{title}</td>
                    <td className={Style.thborder}>{body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          )
        }
         
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className={`pagination ${Style.pagibtn}`}>
          {" "}
          <li className="page-item">
            <a className="page-link" href="#" onClick={gotoFpage}>First</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={Prepage}>Prev</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={Nextpage}>Next</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={gotoLpage}>
              Last
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
