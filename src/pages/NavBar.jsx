import React from "react";
import "./pages.css";
import { Outlet, Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="outer">
     <div className="nav">
        <div className="heading">
            <h1>Brain Files</h1>
        </div>
         <ul>
             <li><Link to="/Login">Log in</Link></li>
             <li><Link to="/About">About</Link></li>
             <li><Link to="/Pyq">Resources</Link></li>
             <li><Link to="/Contact">Contact</Link></li>
             <li><Link to="/">Home</Link></li>
         </ul>
        
    </div>
    <Outlet />
    </div>
    );
}

export default NavBar;