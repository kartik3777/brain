import React from 'react'
import "./contact.css"
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Footer from './Footer'

//https://script.google.com/macros/s/AKfycbxV2GcO0XcD5BWxlaCdIZ2LicXkdFVfD37xLh54GIcY-7zfLUZJKMiHXRHm_hm4SlYm/exec

function FormContact(){

  function handleContactForm(){
    
    let form = document.querySelector("form");
    // The document.querySelector() method returns the first element that matches a specified CSS selector.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       
        document.querySelector("#submit").value = "Submiting..";
        
        let data = new FormData(form);
       
        fetch('https://script.google.com/macros/s/AKfycbxV2GcO0XcD5BWxlaCdIZ2LicXkdFVfD37xLh54GIcY-7zfLUZJKMiHXRHm_hm4SlYm/exec', {
                method: "POST",
                body: data
            })
           
            .then(res => res.text())
        
            .then(data => {
               
                document.querySelector("#submit").value = "Submitted  "
                document.getElementsByClassName("Query-input")[0].style.display ="none"
                document.getElementsByClassName("Query-input")[1].style.display ="none"
                document.getElementsByClassName("Query-input")[2].style.display ="none"
                document.getElementsByClassName("Query-input")[3].style.display ="none"
                document.getElementsByClassName("Query-input")[4].style.display ="none"
                document.getElementsByClassName("Query-input")[5].style.display ="none"
                // document.querySelector("#submit").style.color = "green"
                document.getElementsByClassName("main-form")[0].style.backgroundColor ="white"
            });
    })
  
    //  document.getElementsByClassName("student-input")[0].value ="";
    //  document.getElementsByClassName("student-input")[1].value ="";
    //  document.getElementsByClassName("student-input")[2].value ="";
    //  document.getElementsByClassName("student-input")[3].value ="";
    //  document.querySelector("#sub").value = "Submitted"
   
  //  document.getElementsByClassName("login-box")[0].style.display ="none";

  }



  return <>
  <div className="outerForm">
  <div className="formHead">
          <span>Are You a JEE-Aspirant?</span>
          <p>Provide your contact details and our team will call you soon!</p>
          </div>
          
          <div className="main-form">
            <form>
            <div className="inside-form">
      <input  className='Query-input' name='name' type="text"  placeholder="Name"/>
      <input  className='Query-input' name='email' type="text"  placeholder="Enter email"/>
      <input className='Query-input' name='phone' type="text" placeholder="Phone-number" /> 
      <input  className='Query-input' name='yourClass' type="text"  placeholder="Your-Class" /> 
      <input  className='Query-input' name='exam' type="text"  placeholder="For which Exam you are preparing" /> 
      <input  className='Query-input' name='query' type="text"  placeholder="Any query?" /> 
      <div className="submit"><input onClick={handleContactForm} id='submit' type="submit" value="Submit" /></div>
      </div>
    
      </form>
      </div>
     
  </div>
   

  

  </>
}

function Contact() {
  return (
    <>
    <div className='contactus'>
      <h1>Contact Us</h1>
      <div className="contact-page">
        <div className="contact-1">
        <p
            style={{
              width: "90%",
              padding: "15px",
              lineHeight: "1.3",
              fontSize: "20px",
              backgroundColor: "",
              margin: "10px",
              textAlign:"left"
            }}
          >
            "Experience the educational revolution with Brain Files! Join us and
            embark on your journey to success!"
          </p>
          <div className="info2">
            <h1>Founder</h1>
            <div className="profile">
              <div className="dp">
                <img src="devesh-sir.jpg" alt="" />
              </div>
              <div className="upper-details">
                <h3 className="name">
                  Devesh Dixit <span>(CDD Sir)</span>
                </h3>
                <h4>B.Tech(IIT-BHU)</h4>
                <div className="phone">
                  <CiPhone style={{ marginRight: "5px", fontSize: "23px" }} />
                  <p> +91 8840553669</p>
                </div>
                <div className="phone">
                  <CiMail style={{ marginRight: "5px", fontSize: "24px" }} />
                  <p> brainfilesllp@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="exp">
              <p>Educator for IIT JEE Advanced Mentor and Councellor</p>
              <p>Chemistry Faculty at CSRL Super 30</p>
              <p>Center Director - Resonance Kanpur U.P.</p>
            </div>
          </div>
        </div>



        <div className="contact-2">
   <div className="para">
            <p>
              <span>Reach out to us</span>
              <br />
              Get your questions answered about learning with Brain Files.
            </p>
          </div>

          <div
            style={{
              paddingLeft: "10px",
              marginTop: "10px",
              paddingBottom: "4px",
            }}
          >
            <CiPhone style={{ marginRight: "5px", fontSize: "1.3em" }} />
            <span style={{ fontWeight: "bold" }}>Call </span>
            +91 8840553669
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <CiMail style={{ marginRight: "5px", fontSize: "1.3em" }} />
            <span style={{ fontWeight: "bold" }}>eMail </span>
            brainfilesllp@gmail.com
          </div>

          <p className="contact-address">
            Brain Files LLP. 117/N/18, 1st Floor, Avon Market, Kakadeo, Kanpur
            Nagar, 208025
          </p>
          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.3637236331692!2d80.29188177527921!3d26.47623137691007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c380ddc4e9dc1%3A0xc240100d0c205a4f!2sAvon%20Market%2C%20Ambedkar%20Nagar%2C%20Navin%20Nagar%2C%20Kakadeo%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707755702670!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    
    </div> 
    <FormContact/>
    <Footer />
    </>
  )
}

export default Contact
