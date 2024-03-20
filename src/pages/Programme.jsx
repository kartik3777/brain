import React from 'react'
import { FaSchool } from "react-icons/fa";
// import { SlChemistry } from "react-icons/sl";
import { FaBookReader } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./pages.css";
import Footer from "./Footer";
import "./about.css"

function Admission() {
    return (
        <>

            <div className="addmi">
                <h2>We invites you for addmission in OFFLINE and ONLINE mode </h2>
                <ul id="add">
                    <li>
                        One Year Classroom Programme for IIT-JEE (Main & Advanced)
                        [For 11 moving to 12]
                    </li>
                    <li>
                        One Year Classroom Programme for IIT-JEE (Main & Advanced)
                        [For dropper's]
                    </li>
                    <li>
                        Two Year Classroom Programme for IIT-JEE (Main & Advanced)
                        [For 10 Moving to 11 Students]
                    </li>
                    <li>
                        One Year/Two Year Classroom Programme for NEET (U.G.)  [For
                        11 , 12 & 12 Passout Students]
                    </li>
                    <li>
                        One Year Classroom Programme for CUET
                        [For dropper's]
                    </li>
                </ul>
            </div>
        </>
    );
}

function Success() {
    
    return (
        <div className='success-main'>
           <div className="success-page">
                <h1>We offer Online & Offline Programme common for</h1>
                <div className='rightdiv' style={{ textAlign: "center" }}>
                    <div className='rigthdivcard'>
                    {/* <FontAwesomeIcon className='icons' icon="fa-solid fa-graduation-cap" /> */}
                        {/* <SlChemistry className='icons fa-4x' /> */}
                        <FaBookReader className='icons icon-1' />
                        <h4>IIT JEE <br />Main & Advanced</h4>
                        
                    </div>

                    <div className='rigthdivcard'>
                        <FaUserDoctor className='icons' />
                        <h4 >NEET(UG)</h4>
                       
                    </div>
                    <div className='rigthdivcard'>
                        <FaSchool className='icons' />
                        <h4>CUET</h4>
                       
                    </div>

            </div>
            </div>
            <div className="addmi">
                <h2>We invites you for addmission in OFFLINE and ONLINE mode </h2>
                <ul id="add">
                    <li>
                        One Year Classroom Programme for IIT-JEE (Main & Advanced)
                        [For 11 moving to 12]
                    </li>
                    <li>
                        One Year Classroom Programme for IIT-JEE (Main & Advanced)
                        [For dropper's]
                    </li>
                    <li>
                        Two Year Classroom Programme for IIT-JEE (Main & Advanced)
                        [For 10 Moving to 11 Students]
                    </li>
                    <li>
                        One Year/Two Year Classroom Programme for NEET (U.G.)  [For
                        11 , 12 & 12 Passout Students]
                    </li>
                    <li>
                        One Year Classroom Programme for CUET
                        [For dropper's]
                    </li>
                </ul>
            </div>
            {/* <Admission /> */}
            <Footer />
        </div>


    )



}
export default Success
