import React, { useState } from "react";
import Style from "../Tabs/Tabs.module.css";
import { FaChevronCircleDown } from "react-icons/fa";
const Tabs = () => {
  const [activeTab, setactiveTab] = useState("tab1" );
  const handleTabClick = (tab) => {
    setactiveTab(tab);
  };
  const [showData, setShowdata] = useState({
    showData1: false,
    showData2: false,
    showData3: false,
  });
  const accordianClick = (key) => {
    setShowdata((prevShowdata) => ({
      ...Object.fromEntries(Object.keys(prevShowdata).map((k) => [k, false])),
      [key]: !prevShowdata[key],
    }));
  };

  return (
    <>
      <div className={`container ${Style.tabContainer}`}>
        <div className={Style.tabs}>
          <div className={`${Style.tab} ${activeTab === "tab1" ? Style.active : " "}`}
            onClick={() => handleTabClick("tab1")}>Home</div>
          <hr />
          <div className={`${Style.tab} ${activeTab === "tab2" ? Style.active : " "}`}
            onClick={() => handleTabClick("tab2")}>About</div>
          <hr />
          <div className={`${Style.tab} ${activeTab === "tab3" ? Style.active : " "}`}
            onClick={() => handleTabClick("tab3")}>Servies</div>
          <hr />
        </div>
        <div className={Style.tabContent}>
          {activeTab === "tab1" && (
            <p>
              <h3>Home</h3> Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Itaque voluptatem aperiam dicta beatae quasi! Voluptates
              quae, maiores voluptate laudantium ex doloribus error, earum ea
              quos consectetur delectus cupiditate repudiandae laboriosam.
              Velit, illum! Aspernatur debitis nihil suscipit quas! Aperiam
              voluptates voluptatibus ad consequuntur, adipisci doloribus vero
              dolor molestiae reprehenderit at nulla!
            </p>
          )}

          {activeTab === "tab2" && (
            <p>
              <h3>About</h3> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iure ut ex commodi quod quasi, earum voluptas est dolor enim
              ad, dicta molestiae soluta voluptate distinctio, cumque laboriosam
              ratione! Ullam aspernatur molestias minima totam cupiditate maxime
              nostrum nesciunt labore eius expedita aut quae, nobis magni
              aperiam repudiandae omnis doloribus, ratione cumque.
            </p>
          )}

          {activeTab === "tab3" && (
            <p>
              <h3>Servies</h3> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores minus, omnis ipsam distinctio repellat
              laudantium hic deserunt! Numquam pariatur delectus at commodi!
              Quia, officia voluptatem! Corrupti necessitatibus quia officia,
              illum perferendis, quidem sapiente, quibusdam dicta accusamus eius
              quisquam voluptatum explicabo nam laboriosam cum! Eaque
              voluptatum, est veniam esse quo repudiandae?
            </p>
          )}
        </div>
      </div>
      <div className={`container ${Style.accordian}`}>
        <div className="accordian_item">
          <div
            className={Style.accordian_title}
            onClick={() => accordianClick("showData1")}
          >
            Home
            <span
              className={`${Style.arrow} ${
                showData.showData1 ? Style.roated : ""
              }`}
            >
              <FaChevronCircleDown />
            </span>
          </div>
          {showData.showData1 && (
            <div className={Style.accordian_content}>
              <p>
                <h3>Home Content</h3> Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Itaque voluptatem aperiam dicta beatae quasi!
                Voluptates quae, maiores voluptate laudantium ex doloribus
                error, earum ea quos consectetur delectus cupiditate repudiandae
                laboriosam. Velit, illum! Aspernatur debitis nihil suscipit
                quas! Aperiam voluptates voluptatibus ad consequuntur, adipisci
                doloribus vero dolor molestiae reprehenderit at nulla!
              </p>
            </div>
          )}
        </div>
        <div className="accordian_item">
          <div
            className={Style.accordian_title}
            onClick={() => accordianClick("showData2")}
          >
            About
            <span
              className={`${Style.arrow} ${
                showData.showData2 ? Style.roated : ""
              }`}
            >
              <FaChevronCircleDown />
            </span>
          </div>
          {showData.showData2 && (
            <div className={Style.accordian_content}>
              <p>
                <h3>About Content</h3> Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Itaque voluptatem aperiam dicta beatae quasi!
                Voluptates quae, maiores voluptate laudantium ex doloribus
                error, earum ea quos consectetur delectus cupiditate repudiandae
                laboriosam. Velit, illum! Aspernatur debitis nihil suscipit
                quas! Aperiam voluptates voluptatibus ad consequuntur, adipisci
                doloribus vero dolor molestiae reprehenderit at nulla!
              </p>
            </div>
          )}
        </div>
        <div className="accordian_item">
          <div
            className={Style.accordian_title}
            onClick={() => accordianClick("showData3")}
          >
            Servies
            <span
              className={`${Style.arrow} ${
                showData.showData3 ? Style.roated : ""
              }`}
            >
              <FaChevronCircleDown />
            </span>
          </div>
          {showData.showData3 && (
            <div className={Style.accordian_content}>
              <p>
                <h3>Servies Content</h3> Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Itaque voluptatem aperiam dicta beatae quasi!
                Voluptates quae, maiores voluptate laudantium ex doloribus
                error, earum ea quos consectetur delectus cupiditate repudiandae
                laboriosam. Velit, illum! Aspernatur debitis nihil suscipit
                quas! Aperiam voluptates voluptatibus ad consequuntur, adipisci
                doloribus vero dolor molestiae reprehenderit at nulla!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
