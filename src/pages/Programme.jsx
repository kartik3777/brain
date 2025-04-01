import React from 'react'
import { FaSchool } from "react-icons/fa";
// import { SlChemistry } from "react-icons/sl";
import { FaBookReader } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./pages.css";
import Footer from "../components/Footer/Footer";
import "./about.css"
import Program from '../components/programs/program';

function Success() {
    
    return (
        <>
        <div className='success-main'>
           <div className="success-page">
                <h1>We offer Online & Offline Programs common for</h1>
                 <Program />
            </div>
            <div className="addmi">
                <h2>We invites you for admission in OFFLINE and ONLINE mode </h2>
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
        
        </div>
    <Footer />
    </>
    )



}
export default Success
