import {React, useState} from 'react'



const studentData = [];


function Login() {
  
 



  
  const [loginData, setLoginData] = useState({
    name:"",
    email: "",
    password:"",
    class: ""
  })
  const [emailData, setEmail] = useState("");
  const [passwordData, setPassword] = useState("");
  const [nameData, setName] = useState("");
  const [classData, setClass] = useState("");
  

  function handleChange(e){
  const {name, value} = e.target;
  setLoginData((prev) => {
    return {...prev,
       [name] :value
      }
  })
 
  }

  function storeData(){
    setEmail(loginData.email);
    setPassword(loginData.password);
    setClass(loginData.class);
    setName(loginData.name);
    
    studentData.push(loginData);
    console.log(studentData[0]);
    console.log(studentData[1]);
    console.log(studentData[2]);
    setLoginData({
      name:"",
      email: "",
      password:"",
      class: ""
    })
  }


  return (
    <div>
   
   
      <div className='login-position'>
    <div className='login-box'>
        <div className='login-heading'>Register</div>
        <div className='cont2'>
        <div className='input-field' >
          <input value={loginData.name}  onChange={handleChange} name='name' type="text" required spellCheck="false" />
          <label>Name</label>
         </div>

        <div className='input-field' >
          <input value={loginData.email}  onChange={handleChange} name='email' type="text" required spellCheck="false" />
          <label>Enter email</label>
         </div>
       
        <div className='input-field'>
          <input value={loginData.password} onChange={handleChange} name='password' type="text" required spellCheck="false" /> 
          <label>Phone-number</label>
         </div>
        <div className='input-field'>
          <input value={loginData.class} onChange={handleChange} name='class' type="text" required spellCheck="false" /> 
          <label>class</label>
         </div>
        </div>
        <div onClick={storeData} className='btn'>Register</div> 
        <div className='btn'>Cancel</div> 
    </div>
    </div>
      
    </div>
  )
}

export default Login
