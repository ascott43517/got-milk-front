import React from "react";
import { useState } from "react";
import axios from "axios";
import './Profile.css';




const Profile = (props) => {
  console.log(props.currentUser);
return(
  <section className="profile-background">


  Logged in as:  
  
  {props.currentUser.username}
  <p></p>
  address : {props.currentUser.address}
  <p></p>
  user ID :{props.currentUser.user_id}
 <p></p>
 
  <button className="btn" onClick={() => props.postClick()}>Make a Post</button><button className="btnn" onClick={() => props.editUserClick()}>Edit User Information</button>
  {/* {props.getPosts} */}
  </section>
    
)

};

export default Profile;