import React from "react";
import { useState } from "react";



  
  const kdefaultFormState = {
    address:"",
    username:"",
  
  
  };
  const Edit = (props) => {
    kdefaultFormState.user_id = props.currentUser
  const [formData, setFormData] = useState(kdefaultFormState);
  
    
  const handleChange = (event) => {
      const fieldValue = event.target.value;
      const fieldName = event.target.name
      const newFormData = {...formData, [fieldName]: fieldValue}
      setFormData(newFormData)
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
          <form className= 'create-user-form'onSubmit={handleSubmit}>
            
              <label htmlFor="username"> Username</label>
              <input type="text" id="username"name="username" value={formData.username} onChange={handleChange} placeholder="Enter New Username"/>
               <p></p>
            
              <label htmlFor="address"> Address</label>
              <input type="address" id="address"name="address" value={formData.address} onChange={handleChange} placeholder="Enter New Address"/>
              <p></p>
              <input  className = 'create-user-btn' type ="submit" value="Save Changes"/>
              <p></p>
            
        </form>
         
          </div>
          </section>
        )
      };
      
    
  
  export default Edit;