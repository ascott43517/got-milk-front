
import { useState } from "react";
import './NewUserForm.css';


const kdefaultFormState = {
  address:"",
  username:"",
};

const NewUserForm = (props) => {
  const [formData, setFormData] = useState(kdefaultFormState);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name
    const newFormData = {...formData, [fieldName]: fieldValue}
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUserSubmit(formData);
    setFormData(kdefaultFormState);
  };


  return (
    <div className="auth-form-container">
      <h2>Sign Up</h2>
    <form className= 'create-user-form'onSubmit={handleSubmit}>
      
        <label htmlFor="address"> Address</label>
        <input type="text" id="address"name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address"/>
         <p></p>
        <label htmlFor="username"> Email</label>
        <input type="text" id="username"name="username" value={formData.username} onChange={handleChange} placeholder="youremail@gmail.com"/>
        <p></p>
      <input  className = 'create-user-btn' type ="submit" value="Create New User"/>
      <p></p>
      
  </form>
    <button className="link-btn" onClick={() => props.setCurrentPageName("Login")}> Already have an account? Login Here.</button>
    </div>
    
  )
};

export default NewUserForm;