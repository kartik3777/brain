import React from 'react'
import './program.css'

function program() {
  return (
  <div className='img-box-out'>
    <div className="image-container">
      <div className="overlay"></div>
      <img
        src="1.jpeg"
        alt="Overlay"
        className="image"
      />
      <div className="text-overlay">IIT JEE Main & Advanced</div>
    </div>
    <div className="image-container">
      <div className="overlay"></div>
      <img
        src="neet.jpeg"
        alt="Overlay"
        className="image"
      />
      <div className="text-overlay">NEET(UG)</div>
    </div>
    <div className="image-container">
      <div className="overlay"></div>
      <img
        src="3.jpeg"
        alt="Overlay"
        className="image"
      />
      <div className="text-overlay">CUET</div>
    </div>
    </div>
  )
}

export default program
