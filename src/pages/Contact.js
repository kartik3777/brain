import React from 'react'

function Contact() {
  return (
    <div className='Contact'>
       <div className="contact-bigbox">
        <div className="profile"></div>
        <div className="form">
          <div className="1st">
          <div>
            <label htmlFor="input">First Name</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="input">Last Name</label>
            <input type="text" name="" id="" />
          </div>
          </div>
          <div className="2nd">
          <label htmlFor="input">Email</label>
            <input type="text" name="" id="" />
          </div>
          <div className="3rd">
          <label htmlFor="input">Message</label>
            <input type="text" name="" id="" />
          </div>
        </div>
       </div>
    </div>
  )
}

export default Contact
