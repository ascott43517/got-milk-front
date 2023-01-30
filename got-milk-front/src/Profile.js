import React from "react";
import { useState } from "react";
import axios from "axios";
import './Profile.css';




const Profile = (props) => {
console.log(props.currentUser.username)
return(
  <section className="profile-background">


  Logged in as:  
  
  {props.currentUser.username}
  <p></p>
  
  <button className="btn">Make a Post</button><button className="btnn">Edit User Information</button>
  
  </section>
    
)

};

export default Profile;