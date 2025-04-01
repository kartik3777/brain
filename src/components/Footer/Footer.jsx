import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { CiTwitter } from "react-icons/ci";
import './footer.css'


function Footer() {
  return (
    <div className="footer">
    <p>© Brain Files.  All rights Reserved</p>
    <div>
      <a href="https://www.instagram.com/brainfiles._?igsh=bXdud2hxdXg4c2ph" target='blank'> <InstagramIcon style={{fontSize:"31px"}} className="icon" /> </a>

      <a href="" target='blank'> <LinkedInIcon style={{fontSize:"33px"}} className="icon" /> </a>
      <a href="https://m.facebook.com/brainfilesdd/" target='blank'> <FacebookIcon style={{fontSize:"33px"}} className="icon" /> </a>
      <a href="https://www.youtube.com/@Brainfilesbyddsir" target='blank'> <YouTubeIcon style={{fontSize:"33px"}} className="icon" /></a>
      {/* <CiTwitter className="icon" /> */}
    </div>
  </div>
  )
}

export default Footer
