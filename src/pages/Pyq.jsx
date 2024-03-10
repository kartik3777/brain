import React from "react";
import data from "./data";
import Footer from "./Footer";
import './pyq.css'

function ExamPaper(props) {
  return (
    <>
      <li>
        <h4> {props.name} </h4>
        <ul>
          <li>
            <a
              style={{ color: "blue" }}
              href={props.paperLink1}
              target="_blank"
            >
              paper {props.type1}
            </a>
          </li>
          <li>
            <a
              style={{ color: "blue" }}
              href={props.paperLink2}
              target="_blank"
            >
              paper {props.type2}
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}

function Pyq() {
  return (
    <>
    <div className="pyq-outbox" id="pyq-outbox">
      <h1>Previous Year Papers | Jee Mains & Advanced</h1>
      <p>
        Find accurate answers along with test papers & text solutions for major
        exams here.
      </p>
      <div className="mani">
        <ul className="style">
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

        
      </div>
      <Footer />
    </div>
   
    </>
  );
}

export default Pyq;
