import React from 'react'
import './qr.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Qr() {
  return (
    <div>
      <p style={{margin:"5px", fontSize:"18px", fontWeight:600}}>Follow us at:</p>
      <div className="qr-out">
         <div className="qr-box">
            <div className="box-1-head">
              <InstagramIcon style={{color:"palevioletred"}} />  Instagram
            </div>
            <a href="https://www.instagram.com/brainfiles._?igsh=bXdud2hxdXg4c2ph" target='blank'>
            <img src="./qr/insta.jpg" alt="instagram qr" />
            </a>
           
         </div>
         <div className="qr-box">
         <div className="box-1-head">
              <FacebookIcon style={{color:"blue"}}/>  Facebook
            </div>
            <a href="https://m.facebook.com/brainfilesdd/" target='blank'>
            <img src="./qr/facebook.png" alt="facebook qr" />
            </a>
         </div>
         <div className="qr-box">
         <div className="box-1-head">
              <YouTubeIcon style={{color:"red"}} /> Youtube
            </div>
            <a href="https://www.youtube.com/@Brainfilesbyddsir" target='blank'>
            <img src="./qr/youtube.png" alt="youtube qr" />
            </a>
            
         </div>
      </div>
    </div>
  )
}

export default Qr
