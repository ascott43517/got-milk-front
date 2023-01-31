import React from "react";
import { useState } from "react";

const kdefaultFormState = {
  address:"",
  quantity:"",

};
const Post = (props) => {
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
    <section>
 
        <div className="auth-form-container">
          <h2>Make a Post!</h2>
        <form className= 'create-user-form'onSubmit={handleSubmit}>
          
            <label htmlFor="name"> Formula Name</label>
            <input type="text" id="name"name="name" value={formData.formula_name} onChange={handleChange} placeholder="Enter Formula Name"/>
             <p></p>
            <label htmlFor="quantity"> Quantity</label>
            <input type="quantity" id="quantity"name="username" value={formData.quantity} onChange={handleChange} placeholder="Enter Quantity"/>
            <p></p>
            
            <label htmlFor="address"> Address</label>
            <input type="address" id="address"name="addess" value={formData.address} onChange={handleChange} placeholder="Enter Address"/>
            <p></p>
            <label htmlFor="username"> Email</label>
            <input type="username" id="username"name="username" value={formData.address} onChange={handleChange} placeholder="Enter Username"/>
            <p></p>
            <input  className = 'create-user-btn' type ="submit" value="Post"/>
            <p></p>
          
      </form>
       
        </div>
        </section>
      )
    };
    
  

export default Post;