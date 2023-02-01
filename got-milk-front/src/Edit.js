import React from "react";
import { useState } from "react";



  
  const kdefaultFormState = {
   address:"",
    username:"",
  
  
   };
  const Edit = (props) => {
    

 kdefaultFormState.user_id = props.currentUser
 console.log(kdefaultFormState.user_id)
  const [formData, setFormData] = useState(kdefaultFormState);
  
    
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
              <input type="text" id="username"name="username" value={formData.username} onChange={handleChange} placeholder={props.currentUser.username}/>
               <p></p>
            
              <label htmlFor="address"> Address</label>
              <input type="address" id="address"name="address" value={formData.address} onChange={handleChange} placeholder={props.currentUser.address}/>
              <p></p>
              <input  className = 'create-user-btn' type ="submit" value="Save Changes"/>
              <p></p>
            
        </form>
         
          </div>
          </section>
        )
      };
      
    
  
  export default Edit;