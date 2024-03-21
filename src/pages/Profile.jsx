import React from 'react'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function Profile() {
  return (
    <div className="infox">
    <h1>Founder</h1>
    <div className='info2'>
    <div className="profile">
      <div className="dp">
        <img src="devesh-sir.jpg" alt="" />
      </div>
      <div className="upper-details">
        <h3 className="name">
          Devesh Dixit
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
      {/* <p>Chemistry Faculty at CSRL Super 30</p>
      <p>Center Director - Resonance Kanpur U.P.</p> */}
    </div>
    </div>
  </div>
  )
}

export default Profile
