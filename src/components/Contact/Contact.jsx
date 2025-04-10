import React from "react";
import "./contact.css";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from "../Footer/Footer";
import Reviews  from './Reviews';
import Qr from "./Qr";

//https://script.google.com/macros/s/AKfycbxV2GcO0XcD5BWxlaCdIZ2LicXkdFVfD37xLh54GIcY-7zfLUZJKMiHXRHm_hm4SlYm/exec

function FormContact() {
  function handleContactForm() {
    let form = document.querySelector("form");
    // The document.querySelector() method returns the first element that matches a specified CSS selector.
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      document.querySelector("#submit").value = "Submiting..";

      let data = new FormData(form);

      fetch(
        "https://script.google.com/macros/s/AKfycbxV2GcO0XcD5BWxlaCdIZ2LicXkdFVfD37xLh54GIcY-7zfLUZJKMiHXRHm_hm4SlYm/exec",
        {
          method: "POST",
          body: data,
        }
      )
        .then((res) => res.text())

        .then((data) => {
          document.querySelector("#submit").value = "Submitted  ";
          document.getElementsByClassName("Query-input")[0].style.display =
            "none";
          document.getElementsByClassName("Query-input")[1].style.display =
            "none";
          document.getElementsByClassName("Query-input")[2].style.display =
            "none";
          document.getElementsByClassName("Query-input")[3].style.display =
            "none";
          document.getElementsByClassName("Query-input")[4].style.display =
            "none";
          document.getElementsByClassName("Query-input")[5].style.display =
            "none";
          // document.querySelector("#submit").style.color = "green"
          document.getElementsByClassName(
            "main-form"
          )[0].style.backgroundColor = "white";
        });
    });

    //  document.getElementsByClassName("student-input")[0].value ="";
    //  document.getElementsByClassName("student-input")[1].value ="";
    //  document.getElementsByClassName("student-input")[2].value ="";
    //  document.getElementsByClassName("student-input")[3].value ="";
    //  document.querySelector("#sub").value = "Submitted"

    //  document.getElementsByClassName("login-box")[0].style.display ="none";
  }

  return (
    <>
    <div className="form-brainfiles">
      <div className="outerForm">
        <div className="formHead">
          <span>Are You a JEE/NEET(UG) Aspirant</span>
          <p>We will get back to you soon!</p>
        </div>

        <div className="main-form">
          <form>
            <div className="inside-form">
              <input
                className="Query-input"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                className="Query-input"
                name="email"
                type="text"
                placeholder="Enter email"
              />
              <input
                className="Query-input"
                name="phone"
                type="text"
                placeholder="Phone-number"
              />
              <input
                className="Query-input"
                name="yourClass"
                type="text"
                placeholder="Your-Class"
              />
              <select className="Query-input" name="exam" type="text">
                <option  value="" disabled selected hidden>
                  Target Exam
                </option>
                <option  value="IIT JEE">IIT JEE</option>
                <option value="NEET">NEET</option>
                <option value="CUET">CUET</option>
                <option value="Others">Others</option>
              </select>
              {/* <input className='Query-input' name='exam' type="text" placeholder="Target Exam" /> */}
              <input
                className="Query-input"
                name="query"
                type="text"
                placeholder="Any query?"
              />
              <div className="submit">
                <input
                  onClick={handleContactForm}
                  id="submit"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

function Map(){
   return <>
       <div className="map">
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.3635745595734!2d80.29188177487998!3d26.47623617871268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c380ddc4e9dc1%3A0xc240100d0c205a4f!2sAvon%20Market%2C%20Ambedkar%20Nagar%2C%20Navin%20Nagar%2C%20Kakadeo%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710053958764!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
   </>
}

function Contact() {
  return (
    <>
      <div className="contact-cont">
            <div className="contact-2">
            <div className="para">
              <p>
                <span>Reach out to us</span>
                <br />
                Get your questions answered about learning with Brain Files.
              </p>
            </div>

            <div className="contact-detail-brain">
            <div className="contact-phone-email" >
              <div className="contact-icons" >
              <PhoneInTalkIcon style={{color:"blue"}} />
              <span style={{color:"blue", fontWeight: 600}}> Call</span>
              </div>
              +91 8840553669
            </div>

            <div  className="contact-phone-email">
              <div className="contact-icons"  >
              <EmailIcon style={{color:"blue"}} />
              <span style={{color:"blue", fontWeight: 600}}> Email</span>
              </div>
              brainfilesllp@gmail.com
            </div>

            <div className="contact-phone-email">
            <div className="contact-icons" >
            <LocationOnIcon style={{color:"blue"}}  />
              <span style={{color:"blue", fontWeight: 600}}> Address</span>
              </div>
            <p className="contact-address">
              Brain Files LLP. 117/N/18, 1st Floor, Avon Market, Kakadeo, Kanpur
              Nagar, 208025
            </p>
            </div>

            </div>
             {/* <Profile /> */}
             <Qr />
            </div>
            <div className="brain-form">
            <FormContact />
            </div>
        
      </div>
      {/* <Map /> */}
      <Reviews />
      <Footer />

    </>
  );
}

export default Contact;
