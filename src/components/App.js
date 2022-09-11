import React, {Component, useState} from "react";
import '../styles/App.css';
import validator from "validator";

const App = () => {
  const [signupData, setSignupData] = useState({ name:"", email: "", password: "", phoneNumber: "", gender:"" })

  const handleSignup = ()=>{
    if (signupData.password.length > 0 && signupData.password.length >5 && signupData.name.length > 0 && signupData.phoneNumber.length >9  && 
       signupData.phoneNumber.length < 11 && signupData.email.length>0 && (validator.isEmail(signupData.email))) {
          console.log("Signup Successfully")
          alert("Signup Successfully")
  } else {
      if (signupData.email.length === 0 ) {
          alert("Email cannot be empty");
      }else if(!validator.isEmail(signupData.email)){
          alert("Email is not valid")
      }else if (signupData.name.length === 0 ) {
        alert("Name cannot be empty");
      }else if (signupData.phoneNumber.length <10 || signupData.phoneNumber.length > 10 ) {
        alert("Invalid phone number, must containt 10 digits");
        }
       else if (signupData.password.length === 0) {
          alert("Password cannot be empty")
      } else if (signupData.password.length < 6) {
        alert("Password must contain atleast 6 letters")
    } 
  }
  }
  return (
    <div id="main">
      <h1>Signup Form</h1>
      <div className="content">
            <label for='name' className="label">Name <br/>
                <input type='text' id='name' name='name' required placeholder='Name'
                onChange={(e) => { setSignupData({ ...signupData, name: e.target.value }) }}
                 />
            </label><br/>
            <label for='email' className="label">Email<br/>
                <input type='email' id='email' name='email' required placeholder='Email'
                onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }) }}
                 />
            </label><br/>
            <label for='gender' className="label">Gender<br/>
                <select id='gender' name='gender' 
                onChange={(e) => { setSignupData({ ...signupData, gender: e.target.value }) }}
                class='gender'>
                    <option value='male'>male</option>:
                    <option value='female'>female</option>
                    <option value='other'>other</option>
                </select>
            </label><br/>
            <label for='phoneNumber' className="label">Phone Number <br/>
                <input type='text' id='phoneNumber' name='phoneNumber' required placeholder='Phone Number'
                onChange={(e) => { setSignupData({ ...signupData, phoneNumber: e.target.value }) }}
                 />
            </label><br/>
            <label for='password' className="label">Password<br/>
                <input type='password' id='password' name='password' required placeholder='password'
                onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }}
                 />
            </label><br/>
            <button className="button" 
            onClick={()=>{handleSignup()}}
            >Submit</button>

      </div>
    </div>
  )
}


export default App;
