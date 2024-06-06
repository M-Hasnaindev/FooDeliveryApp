'use client'
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setC_password] = useState('')
  const [restoname, setRestoname] = useState('')
  const [cityname, setCityname] = useState('')
  const [fullAddress, setFullAddress] = useState('')
  const [contact, setContact] = useState('')
  return (
    <>
      <h3> Signup </h3>
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="Username"
            className="input-field" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="email" placeholder="example@gmail.com"
            className="input-field" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Password"
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Confirm Password"
            className="input-field" 
            value={c_password}
            onChange={(e) => setC_password(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Resturant Name"
            className="input-field" 
            value={restoname}
            onChange={(e) => setRestoname(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="City Name"
            className="input-field" 
            value={cityname}
            onChange={(e) => setCityname(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Full Address"
            className="input-field" 
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <input type="number" placeholder="Contact No:"
            className="input-field" 
            value={contact}
            onChange={(e) => setContact(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <button className="input-field">SignUp</button>
        </div>
      </div>
    </>
  )
}

export default Signup;