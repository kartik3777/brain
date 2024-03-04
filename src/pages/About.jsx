import React from "react";
import Footer from "./Footer";
import "./about.css";

function Admission() {
  return (
    <>
      <div className="addmi">
        <h2>We invites you for addmission in</h2>
        <ul id="add">
          <li>
            One Year Classroom Programme for IIT-JEE (Main & Advanced) 
            [For 11 Moving to 12 & 12 Passout Students]
          </li>
          <li>
            Two Year Classroom Programme for IIT-JEE (Main & Advanced) 
            [For 10 Moving to 11 Students]
          </li>
          <li>
            One Year/Two Year Classroom Programme for NEET (U.G.)  [For
            11 , 12 & 12 Passout Students]
          </li>
        </ul>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div>
        <div className="results-cont">
          <div className="results-1">
            <span>RESULTS HIGHLIGHTS FROM OUR FIRST BATCH @ KANPUR CENTER</span>
          </div>
          <div className="results-2">
            
              <div className="bachhi">
                <div className="bachhi-dp">
                  <img src="harshita.jpg" alt="" />
                </div>
                <p className="result-name">
                  Harshita Awasthi
                </p>
                <p>B.Tech IIT Kanpur</p>
                <p>Aerospace Engineering</p>
              </div>
              <div className="bachhi">
                <div className="bachhi-dp">
                  <img src="aabha.jpg" alt="" />
                </div>
                <p className="result-name">
                  {" "}
                  <>Aabha</>
                </p>
                <p>B.Tech IIT Bhu</p>
                <p>Mechanical Engineering</p>
              </div>
              <div className="bachhi">
                <div className="bachhi-dp"></div>
                <p className="result-name">
                  <>Kartikey Tiwari</>
                </p>
                <p>B.Tech IIT-Patna</p>
                <p>M&C Engineering</p>
              </div>
            
              <div className="bachhi">
                <div className="bachhi-dp"></div>
                <p className="result-name">
                  {" "}
                  <>Ayush Pandey</>
                </p>
                <p>B.Tech MNNIT Allahabad</p>
                <p>Aerospace Engineering</p>
              </div>
              <div className="bachhi">
                <div className="bachhi-dp"></div>
                <p className="result-name">
                  <>Sarthak Patel</>
                </p>
                <p>B.Tech NIT Trichi</p>
                <p>Mechanical Engineering</p>
              </div>
             
           
          </div>
          <div className="results-3">
            <div className="result-word">
              <ul>
                <li>
                  <p>•</p>12 Students Selected in JEE-Advanced 2023
                </li>
                <li>
                  <p>•</p>2 Students Got 99%tile and above in JEE-Main 2023
                </li>
                <li>
                  <p>•</p>21 Students Selected in JEE-Main 2023
                </li>
              </ul>
            </div>
          </div>
        </div>
       
      </div>
      <Admission />
      <Footer />
    </>
  );
}

export default About;
