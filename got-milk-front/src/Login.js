import React from "react";
import { useState } from "react";
import './Login.css';
const kdefaultFormState = {
  username:"",
  password:"",
};

const Login = (props) => {
  const [formData, setFormData] = useState(kdefaultFormState);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name
    const newFormData = {...formData, [fieldName]: fieldValue}
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleLoginSubmit(formData);
    setFormData(kdefaultFormState);
  };

return (
<div className="auth-form-container">
  <h2>Login</h2>
<form className= 'login-form'onSubmit={handleSubmit}>
  <label htmlFor="username"> email </label>
  <input type="username" placeholder="youremail@gmail.com" id="username" value ={formData.username} onChange={handleChange} name="username"/>
  <p></p>
  <label htmlFor="password"> password </label>
  <input type="password" placeholder="********" id="password" value={formData.password} onChange={handleChange} name="password"/>
  <p></p>
  <button  className = 'create-user-btn' type ="submit" value="Log In" onClick={() => props.handleLoginSubmit(formData.username)}>Log In </button>

</form>
<button className="link-btn" onClick={() => props.setCurrentPageName("New-User")}> Dont have an account? Create one Here.</button>
{/* <button className="link-btn" onClick={() => onFormSwitch('create user')}> Dont have an account? Create one Here.</button> */}

</div>
)


};

export default Login