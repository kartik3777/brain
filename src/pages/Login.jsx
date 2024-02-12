import {React, useState} from 'react'


function Login() {
  
  // const [loginData, setLoginData] = useState({
  //   name:"",
  //   email: "",
  //   phone:"",
  //   yourClass: ""
  // })
  // const [emailData, setEmail] = useState("");
  // const [phoneData, setPhone] = useState("");
  // const [nameData, setName] = useState("");
  // const [classData, setClass] = useState("");
  

  // function handleChange(e){
  // const {name, value} = e.target;
  // setLoginData((prev) => {
  //   return {...prev,
  //      [name] :value
  //     }
  // })
 
  // }

  // function called(){
  //   setEmail(loginData.email);
  //   setPhone(loginData.phone);
  //   setClass(loginData.yourClass);
  //   setName(loginData.name);
    
  //   setLoginData({
  //     name:"",
  //     email: "",
  //     phone:"",
  //     yourClass: ""
  //   })
 
  // }

 

  return (
    <div>
       {/* <h1 id="msg">k</h1> */}
      <div className='login-position'>
    <div className='login-box'>
       <form >
        <div className='login-heading'>Register</div>
        <div className='cont2'>
        <div className='input-field' >
          <input  className='student-input' name='name' type="text" required spellCheck="false" />
          <label>Name</label>
         </div>

        <div className='input-field' >
          <input  className='student-input' name='email' type="text" required spellCheck="false" />
          <label>Enter email</label>
         </div>
       
        <div className='input-field'>
          <input className='student-input' name='phone' type="text" required spellCheck="false" /> 
          <label>Phone-number</label>
         </div>
        <div className='input-field'>
          <input  className='student-input' name='yourClass' type="text" required spellCheck="false" /> 
          <label>Your-Class</label>
         </div>
        </div>
        {/* <button className='btn'>Register</button>  */}
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
    document.getElementsByClassName("login-position")[0].style.display ="none";
  }

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
        fetch('https://script.google.com/macros/s/AKfycbxw2hYHY469VxmdMtVeOF9Jt9kx2PfRMFWxI1LJYk5Nr92ix5RguyOhm4ZVGbDOPymj4A/exec', {
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
   
   document.getElementsByClassName("login-position")[0].style.display ="none";
   

  }




}
//https://script.google.com/macros/s/AKfycbxw2hYHY469VxmdMtVeOF9Jt9kx2PfRMFWxI1LJYk5Nr92ix5RguyOhm4ZVGbDOPymj4A/exec




export default Login
