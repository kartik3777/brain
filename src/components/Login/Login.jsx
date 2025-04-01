import {React, useState} from 'react'
import './login.css'

function Login() {
  const [error, setError] = useState("")
  const [phone, setPhone] = useState();

  function handlePhoneNumber(event) {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
    const truncatedValue = sanitizedValue.slice(0, 10); // Limit to 10 digits
  
    if (sanitizedValue.length > 10) {
      // Display an error message (e.g., set an error state or show an alert)
      setError('Phone number cannot exceed 10 digits');
    }else{
      setError("");
    }
     setPhone(truncatedValue);
    // Update the state or perform any other necessary actions
    // For example:
    // setPhoneNumber(truncatedValue);
  }


  console.log("login called");


  return (
    <div >
       {/* <h1 id="msg">k</h1> */}
      <div>
    <div className='login-box'>
       <form >
        <div className='login-heading'>
          Bfast BRAIN FILES ADMISSION CUM
          SCHOLARSHIP TEST 2025
        </div>
        <div className='cont2'>
        <div className='input-field' >
          <input  className='student-input' name='name' type="text" required spellCheck="false" />
          <label>Name</label>
         </div>
        <div className='input-field'> 
          <input className='student-input' onChange={handlePhoneNumber} value={phone} name='phone' type="number" required spellCheck="false" /> 
          <label>Mobile-number</label>
         </div>
         <p className='error'>{error}</p>
         
        <div className='input-field'>
            <select className="student-input" name="yourClass" type="text">
                <option  value="" disabled selected hidden>
                  Class
                </option>
                <option className='class-option'  value="11th">11th</option>
                <option  className='class-option' value="12th">12th</option>
                <option   className='class-option' value="Dropper">Dropper</option>
                <option  className='class-option'  value="Others">Others</option>
              </select>
         </div>
        </div>
        <div className="option">
        <button onClick={remover} className='btn'>Cancel</button> 
        <input onClick={handleClick} type="submit" id="sub"></input>
       
        </div>
        </form>
    </div>
    </div>
      
    </div>
  )
 
  function remover(){
    document.getElementsByClassName("login-box")[0].style.display ="none";
  }
//https://script.google.com/macros/s/AKfycbx1DGqbVEucVw2YCKOz-LeHkYvcPJL9LMqZQ3ynTVEtF3q0TUuDYD2S5M73-N5VUUwlhg/exec
  function handleClick(){

    let form = document.querySelector("form");
    // The document.querySelector() method returns the first element that matches a specified CSS selector.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
        document.querySelector("#sub").value = "Submiting..";
        // Change the value of the submit button to "Submitting..." while the form is being submitted.
        let data = new FormData(form);
        // The FormData() method creates a new FormData object that contains the values of all the form fields.
        fetch('https://script.google.com/macros/s/AKfycbx1DGqbVEucVw2YCKOz-LeHkYvcPJL9LMqZQ3ynTVEtF3q0TUuDYD2S5M73-N5VUUwlhg/exec', {
                method: "POST",
                body: data
            })
            // The fetch() method is used to make a request to the server and retrieve data.
            // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
            .then(res => res.text())
            // The .then() method is used to handle the response from the server.
            // The response is converted to text using the res.text() method.
            .then(data => {
                // document.querySelector("#msg").innerHTML = data;
                // The innerHTML property sets or returns the HTML content of an element.
                // Here, we are setting the content of the <h1> element to the response from the server.
                document.querySelector("#sub").value = "Submit"
                // Change the value of the submit button back to "Submit" after the form has been submitted.
            });
    })
  
    //  document.getElementsByClassName("student-input")[0].value ="";
    //  document.getElementsByClassName("student-input")[1].value ="";
    //  document.getElementsByClassName("student-input")[2].value ="";
    //  document.getElementsByClassName("student-input")[3].value ="";
    //  document.querySelector("#sub").value = "Submitted"
   
   document.getElementsByClassName("login-box")[0].style.display ="none";
   

  }




}
//https://script.google.com/macros/s/AKfycbxw2hYHY469VxmdMtVeOF9Jt9kx2PfRMFWxI1LJYk5Nr92ix5RguyOhm4ZVGbDOPymj4A/exec




export default Login
