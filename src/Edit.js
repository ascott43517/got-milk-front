import React from "react";
import { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";



  
  const kdefaultFormState = {
   address:"",
    username:"",
  
  
   };
  const Edit = (props) => {
    

 kdefaultFormState.user_id = props.currentUser
 console.log(kdefaultFormState.user_id)
  const [formData, setFormData] = useState(kdefaultFormState);
  const autocomplete = useRef()
  
    
  const handleChange = (event) => {
      const fieldValue = event.target.value;
      const fieldName = event.target.name
      const newFormData = {...formData, [fieldName]: fieldValue}
      if(newFormData.address === ""){
        newFormData["address"] = kdefaultFormState.user_id.address
      } else if (newFormData.username === ""){
        newFormData["username"] = kdefaultFormState.user_id.username
      }
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
      props.handleEditProfileSubmit(formData);
      setFormData(kdefaultFormState);
     
    };
    return (
      <section>
   
   
          <div className="auth-form-container">
          
            <h2>Edit Your Profile!</h2>
            {/* <button className="btn" onClick={() => props.postClick()}>Make a Post</button> */}
            {/* <button className="bton" onClick={() => props.logout()}>Logout</button>
            <button className="bton" onClick={() => props.profileClick()}>Back to Profile</button> */}
            {/* <button className="bton" onClick={() => props.directionsClick()}>Directions</button> */}
          <form className= 'create-user-form'onSubmit={handleSubmit}>
            
              <label htmlFor="username"> Username</label>
              <input type="text" id="username"name="username" value={formData.username} onChange={handleChange} placeholder={props.currentUser.username}/>
               <p></p>
            
              <label htmlFor="address"> Address</label>
              <Autocomplete onPlaceChanged={handleAddressChange} onLoad={onLoad} >
              <input type="address" id="address"name="address" value={formData.address} onChange={handleChange} placeholder={props.currentUser.address} /></Autocomplete>
              <p></p>
              <input  className = 'create-user-btn' type ="submit" value="Save Changes"/>

              
              <p></p>
              
        </form>
        <section>
        <button className="bton" onClick={() => props.profileClick()}>Account</button>
        <button className="bton" onClick={() => props.logout()}>Logout</button></section>
          </div>
          </section>
        )
      };
      
    
  
  export default Edit;