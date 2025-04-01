import React from "react";
import data from "./data";
import Footer from "../Footer/Footer";
import './pyq.css'

function ExamPaper(props) {
  return (
    <>
      {/* <li>
        <h4> {props.name} </h4>
        <ul>
          <li>
            <a
              style={{ color: "#5f26d0" }}
              href={props.paperLink1}
              target="_blank"
            >
              paper {props.type1}
            </a>
          </li>
          <li>
            <a
              style={{ color: "#5f26d0" }}
              href={props.paperLink2}
              target="_blank"
            >
              paper {props.type2}
            </a>
          </li>
        </ul>
      </li> */}

           <div className="exam-box">
           <h4> {props.name} </h4>
           <div className="paper-box">
             <div className="paper">
             <a
              style={{ color: "#5f26d0" }}
              href={props.paperLink1}
              target="_blank"
            >
              paper {props.type1}
            </a>
             </div>

              <div className="paper">
              <a
              style={{ color: "#5f26d0" }}
              href={props.paperLink2}
              target="_blank"
            >
              paper {props.type2}
            </a>
              </div>
              </div>
           </div>


    </>
  );
}

function Pyq() {
  return (
    <>

    <div className="pyq-outbox" id="pyq-outbox">
      <div className="pyq-head">
      <h1>Previous Year Questions | Jee Advanced</h1>
      {/* <h1>Pyqs | Jee Advanced</h1> */}
      <p>
        {/* Find accurate answers along with test papers & text solutions for major
        exams here. */}
        
        Unlock Your Potential: JEE Advanced Question Papers Available Here!
      </p>
      </div>
      <div className="kartik-box-hai">
        <div className="main-pyq-box">
       { data.map((item, index) => {
            return (
              <ExamPaper
               key ={index}
                name={item.name}
                paperLink1={item.paperLink1}
                type1={item.type1}
                type2={item.type2}
                paperLink2={item.paperLink2}
              />
            );
          })}
        </div>
        {/* <ul className="style">
          {data.map((item, index) => {
            return (
              <ExamPaper
                name={item.name}
                paperLink1={item.paperLink1}
                type1={item.type1}
                type2={item.type2}
                paperLink2={item.paperLink2}
              />
            );
          })}
        </ul>
        <ul className="style">
          {data2.map((item, index) => {
            return (
              <ExamPaper
                name={item.name}
                paperLink1={item.paperLink1}
                type1={item.type1}
                type2={item.type2}
                paperLink2={item.paperLink2}
              />
            );
          })}
        </ul> */}

        
      </div>
      <Footer />
    </div>
   
    </>
  );
}

export default Pyq;
