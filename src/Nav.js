import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar = () => {
        if(window.scrollY > 80){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar)
        return ()=> window.removeEventListener("scroll", transitionNavbar)
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NetFlix-Logo" 
        onClick={()=> navigate("/")}/>
        <img className='nav_avatar' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" alt="Your-Avatar" 
        onClick={()=> navigate("/profile")}/>
        </div>
    </div>
  )
}

export default Nav