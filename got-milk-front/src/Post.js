import React from "react";
import { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

const kdefaultFormState = {
  address:"",
  quantity:"",
  formula_name:"",
  // username:"",

};
const Post = (props) => {
const [formData, setFormData] = useState(kdefaultFormState);
const autocomplete = useRef()

  
const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name
    const newFormData = {...formData, [fieldName]: fieldValue, "user_id":props.currentUser.user_id,"username":props.currentUser.username}
    
    setFormData(newFormData)
   
  }


  const onLoad= (obj) => {
    autocomplete.current = obj
   
  }


  const handleAddressChange = () => {
    if (autocomplete.current !== null) {
     setFormData({...formData, address:autocomplete.current.getPlace().formatted_address})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handlePostSubmit(formData);
    setFormData(kdefaultFormState);
   
  };
  return (
    <section>

 
        <div className="auth-form-container">
          <h2>Make a Post!</h2>
        <form className= 'create-user-form'onSubmit={handleSubmit}>
          
            <label htmlFor="formula_name"> Formula Name</label>
            <input type="text" id="formula_name"name="formula_name" value={formData.formula_name} onChange={handleChange} placeholder="Enter Formula Name"/>
             <p></p>
            <label htmlFor="quantity"> How many are there?</label>
            <input type="quantity" id="quantity"name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Enter Quantity"/>
            <p></p>
            
            <label htmlFor="address"> Formula Location</label>
            <Autocomplete onPlaceChanged={handleAddressChange} onLoad={onLoad} >
            <input type="address" id="address"name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address"/></Autocomplete>
            <p></p>
            {/* <label htmlFor="username"> Username(email)</label>
            <input type="username" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter Username"/> */}
            <p></p>
            <input  className = 'create-user-btn' type ="submit" value="Post"/>
            <p></p>
          
      </form>
      <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
      <button className="bton" onClick={() => props.profileClick()}>Account</button>
  <button className="bton" onClick={() => props.logout()}>Logout</button>
        </div>

      
        </section>
      )
    };
    
  

export default Post;