import React from "react";
import Footer from "../Footer/Footer";
import "./success.css";
import IITiansData from "./iitData";
import NITiansData from "./nitData";
import OthersData from "./otherData";
import SliderComponent from "./Slider";

function StudentsProfile(props) {
  return (
    <>
      <div className="bachhi">
        <div className="bachhi-dp">
          <img src={props.photo} alt="" />
        </div>
        <p className="result-name">{props.name}</p>
        <p>{props.collegeName}</p>
        <p style={{fontSize:"14px"}}>{props.branch}</p>
        <p style={{fontSize:"13px"}}>({props.program})</p>
      </div>
    </>
  );
}

function Success() {
  return (
    <>
      <div>
        <SliderComponent />
        <div className="results-cont">
          <div className="results-1">
            <h4>Our Students Our Pride (2023 & 2024 Batches)</h4>
            {/* <h4>Results highlights from our first batch of Kanpur Center</h4> */}
          </div>
          <h3>IITians</h3>
          <div className="results-2">
            {
              IITiansData.map((item, index) => {
                return <StudentsProfile 
                  key ={item.index}
                  name = {item.name}
                  photo ={item.photo}
                  collegeName ={item.collegeName}
                  branch ={item.branch}
                  program ={item.program}
                 />
              })
            }
           
          </div>
          <h3>NITians</h3>
          <div className="results-2">
            {
              NITiansData.map((item, index) => {
                return <StudentsProfile 
                  key ={item.index}
                  name = {item.name}
                  photo ={item.photo}
                  collegeName ={item.collegeName}
                  branch ={item.branch}
                  program ={item.program}
                 />
              })
            }
           
          </div>
          <h3>Other Top Engineering Colleges</h3>
          <div className="results-2">
            {
              OthersData.map((item, index) => {
                return <StudentsProfile 
                  key ={item.index}
                  name = {item.name}
                  photo ={item.photo}
                  collegeName ={item.collegeName}
                  branch ={item.branch}
                  program ={item.program}
                 />
              })
            }
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
