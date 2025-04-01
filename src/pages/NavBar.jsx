import React from "react";
// import "./pages.css";
import './navbar.css'
import { Outlet, Link } from "react-router-dom";

function NavBar(){

    return(
        <>
        <div className="outer">
     <div className="nav">
     <Link to="/">
     <div className="heading">
      
      <img src="./head-2.png" alt="" />
  </div>
     </Link>
        
         <ul>
           
             <li><Link to="/">Home</Link></li>
             <li><Link to="/Programme">Our Programs</Link></li>
             <li><Link to="/Pyq">Resources</Link></li>
             <li><Link to="/Success">Our Success</Link></li>
             <li><Link to="/Contact">Contact</Link></li>
            
            <span id='open' onClick={khulJa} className="open" style= {{fontSize: "40px",color:"#4c13bd", cursor:"pointer"}} >&#9776;</span>

         </ul>
         </div>
      
    <Outlet />
    <div id="slider" className="slider">
    <ul id="menu-bar" onClick={khulJa}>
          {/* <li><Link to="/Login">Login</Link></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Programme">Our Programs</Link></li>
          <li><Link to="/Pyq">Resources</Link></li>
          <li><Link to="/Success">Our Success</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          
         {/* <span id='open' className="open" style= {{fontSize: "40px",color:"black", cursor:"pointer"}} >&#9776;</span> */}
      </ul>
 </div>
    </div>
    
 </>
    );

    function khulJa(){
        if(document.getElementById("slider").style.width === "0%"){
            document.getElementById("slider").style.width = "100%"
            document.getElementById("slider").style.transition = "all 300ms";
        }
        else{
            document.getElementById("slider").style.width = "0%"
        }
       
    }
   
}

export default NavBar;