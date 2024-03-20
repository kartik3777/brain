import React from "react";
import Footer from "./Footer";
import "./about.css";

function About() {
  return (
    <>
      <div>
        <div className="results-cont">
          <div className="results-1">
            <h4>Results highlights from our first batch of Kanpur Center</h4>
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
              <p>B.Tech IIT BHU</p>
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
      {/* <Admission /> */}
      <Footer />
    </>
  );
}

export default About;
