import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100){
      handleShow(true);

    }else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener("scroll", transitionNavBar);
  },[]);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
     <div className='nav_content'>
       <img
       onClick={()=> history("/")}
     className='nav_logo'
     src="https://th.bing.com/th?id=OIP.cVP2HwO-X6cS3bD7UbvmzAHaCL&w=349&h=102&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
     alt=" "/>

     <img 
      onClick={() => history("/profile")}
     className="nav_avatar"
       src="https://th.bing.com/th/id/OIP.i2HBuWmNU78kbh4kUkDr7gAAAA?pid=ImgDet&rs=1"
     alt=""/>
      {/* <h1>This is the nav</h1> */}
     </div>
    </div>
  )
}

export default Nav
