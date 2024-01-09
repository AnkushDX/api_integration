import React, { useState } from 'react'
import './TabBar.css'

const TabBar = () => {
    const [activeTab,setActiveTab]=useState(1)
    const [isMobile,setIsMobile]=useState(false)
    const handleTabclick=(tabIndex)=>{
        setActiveTab(tabIndex)
    }
    const toggleAccordian=()=>{
        setIsMobile(!isMobile)
    }
  return (
    <div className={`box ${isMobile ? 'mobile-view':''}`}>
        <div className="tabs " >
            <div className={`tab ${activeTab===1 ?'active-tabs':''}`}  onClick={()=>handleTabclick(1)}>Tabs 1</div>
            <div  className={`tab ${activeTab===2 ?'active-tabs':''}`}  onClick={()=>handleTabclick(2)}>Tab 2</div>
            <div  className={`tab ${activeTab===3 ?'active-tabs':''}`}  onClick={()=>handleTabclick(3)}>Tab 3</div>
        </div>
        <div className='toggle-btn' onClick={toggleAccordian}></div>
        <div className={`contents ${isMobile ?'acordion-view':''}`}>
            <div className={`content ${activeTab===1? 'active-content':''}`}>
                <h5>Content 1</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores totam animi ex, maxime cum aliquam
                illum minima repudiandae! Obcaecati, rem vitae!
                Perspiciatis sequi, dicta dolore quisquam magni</p>       
            </div>
            <div className={`content ${activeTab===2? 'active-content':''}`}>
                <h5>Content 2</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores totam animi ex, maxime cum aliquam
                illum minima repudiandae! Obcaecati, rem vitae!
                Perspiciatis sequi, dicta dolore quisquam magni</p> 
            </div>
            <div className={`content ${activeTab===3? 'active-content':''}`}>
                <h5>Content 3</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores totam animi ex, maxime cum aliquam
                illum minima repudiandae! Obcaecati, rem vitae!
                Perspiciatis sequi, dicta dolore quisquam magni</p> 
            </div>
        </div>
    </div> 
  )
}

export default TabBar
