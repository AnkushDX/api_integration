import React, { useEffect, useState } from "react";
import Style from "../CrossFilter/CrossFilterId.module.css";
import axios from "axios";
const CrossFilterId = () => {
    const [myData, setmyData] = useState([]);
    const [perPage, setPerpage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);
    const [searchInput, setsearchInput] = useState('');
    const [searchTitle, setsearchTitle] = useState('');
    const [noData, setNoData]= useState(false)

    const shouldShowpagination= myData.length >perPage && ! noData;
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) =>
         setmyData(res.data));
    }, []);

    const indexLast = currentPage * perPage;
    const indeFpage = indexLast - perPage;
    const currentpostPage = myData.slice(indeFpage, indexLast);
    
    const PageNumber=[];
    for(var i=1; i<=Math.ceil(myData.length/perPage); i++){
        PageNumber.push(i);
    }
   const PageShow=(num)=>{
    setcurrentPage(num)
   }
    const Nextpage = () => {
      const lastpage = Math.ceil(myData.length / perPage);
      if (currentPage < lastpage) {
        var count = currentPage + 1;
        setcurrentPage(count); 
      }
    };
    const Prevpage = () => {
      if (currentPage > 1) {
        var count = currentPage - 1;
        setcurrentPage(count);
      }
    };
    const handleSearchID = (e) => {
        const searchId = e.target.value.toLowerCase();
        setsearchInput(searchId);

        if (searchId ===''){
          axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => setmyData(res.data));
          setNoData(false) 
        }else{
          const filterResult = myData.filter((post) =>
          post.id.toString().includes(searchId) ||
            post.title.toLowerCase().includes(searchId)   
      );
         if(filterResult.length === 0){
          setNoData(true)
         }else{
          setNoData(false)
          setmyData(filterResult);
         }   
        }
      };
    const  handleSearchTitle=(e)=>{
        const searchTitle=e.target.value.toLowerCase();
        setsearchTitle(searchTitle)
        // console.log(searchTitle)
        if (searchTitle ===''){
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setmyData(res.data));
            setNoData(false)  
          }else{
            const filterResult2=myData.filter((post)=>
            post.id.toString().includes(searchTitle) ||
            post.title.toLowerCase().includes(searchTitle)
            );
            if(filterResult2.length === 0){
                setNoData(true)
               }else{
                setNoData(false)
                setmyData(filterResult2);
               }  
          }
    }
  return (
    <>
    <div className={"container"}>
      <div className={Style.apidata}>
        <h3 className={Style.heading}>All Api Data Page</h3>
        <div className={Style.searchBar}>
          <input className={Style.sTitle} type="text" id="searchInput" placeholder="Search I'd" value={searchInput} onChange={handleSearchID}/>
          <input className={Style.sTitle} type="text"  placeholder="Search title"  onChange={handleSearchTitle}/>
        </div>
        {noData ? (
          <h3 className={Style.noDataPage}>No Data Found.</h3>
        ):(
          <table className={Style.table}>
          <thead>
            <tr className={Style.head}>
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
        )}
      </div>
    </div>
    {shouldShowpagination &&(
 <nav aria-label="Page navigation example">
 <ul className={`pagination ${Style.pagibtn}`}>
   {" "}
   <li className="page-item"><a className="page-link" href="#" onClick={Prevpage}>Prev</a></li>
   {PageNumber.map((number)=>(
       <li key={number} className="page-item"><a className="page-link" href="#" onClick={()=>PageShow(number)}>{number}</a></li>
   ))}
   <li  className="page-item"><a className="page-link" href="#" onClick={Nextpage}>Next</a></li>
 </ul>
</nav> 
    )}
   
  </>
  )
}
export default CrossFilterId
