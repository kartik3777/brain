import React from 'react'
import { FaSchool } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
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
        <>
            <div>
                <h1 style={{ textAlign: "center", marginTop: "10px", textDecoration: "underline" }}>We offer Programme</h1>
            </div>
            <div>
                <div className='rightdiv' style={{ textAlign: "center" }}>
                    <div className='rigthdivcard'>
                        <SlChemistry className='icons fa-4x' />
                        <h4 style={{ color: "blue", fontSize: "25px" }}>IIT JEE</h4>
                        {/* <p >1000+ enrolled</p> */}
                    </div>

                    <div className='rigthdivcard'>
                        <FaUserDoctor className='icons' />
                        <h4 style={{ color: "blue", fontSize: "25px" }}>NEET(UG)</h4>
                        {/* <p >1000+ enrolled</p> */}
                    </div>
                    <div className='rigthdivcard'>
                        <FaSchool className='icons' />
                        <h4 style={{ color: "blue", fontSize: "25px" }}>CUET</h4>
                        {/* <p >1000+ enrolled</p> */}
                    </div>


                </div>


            </div>
            <Admission />
            <Footer />
        </>


    )



}
export default Success
