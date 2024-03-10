import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
// import { CiTwitter } from "react-icons/ci";
import './footer.css'


function Footer() {
  return (
    <div className="footer">
    <p>© Brain Files.  All rights Reserved</p>
    <div>
      <CiInstagram className="icon" />
      <CiYoutube className="icon" />
      <CiLinkedin className="icon" />
      <CiFacebook className="icon" />
      {/* <CiTwitter className="icon" /> */}
    </div>
  </div>
  )
}

export default Footer
