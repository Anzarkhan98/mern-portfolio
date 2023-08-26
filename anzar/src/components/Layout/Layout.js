import React,{useState} from 'react'
import Home from "../../pages/Home/Home";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import "./Layout.css";
import Menu from './Menu/Menu';
const Layout = () => {
    const[toggle,setToggle] =useState(true)
    //change toggle
    const handleToggle =()=> {
        setToggle(!toggle);
    };
  return (
      <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" :"sidebar"}>
            <div className="sidebar-toggle-icons">
            
                <p onClick={handleToggle}>
                    {toggle?
                    (<FaAngleDoubleLeft size={30} />)
                    :(<FaAngleDoubleRight size={30}/>
                    )}
                  
                    </p>
              
                </div>
                <Menu toggle={toggle} />
        </div>
              
        <div className="container">
          <Home />  
        </div>
      </div>
      
      </>
  )
}

export default Layout 