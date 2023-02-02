import React from "react";
import { useState } from "react";
import axios from "axios";
import './Profile.css';
import PostData from "./PostData";




const Profile = (props) => {
  console.log(props.profileData);
  
return(
  
  <section className="profile-background">
  

  Logged in as:  
  
  {props.currentUser.username}
  <p></p>
  address : {props.currentUser.address}
  <p></p>
  user ID :{props.currentUser.user_id}
  
<p></p>

 
  <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
  <button className="btnn" onClick={() => props.editUserClick()}>Edit User Information</button>
  <button className="bton" onClick={() => props.logout()}>Logout</button>
  <button className="bton" onClick={() => props.dashboardClick()}>Go to Dashboard</button>

<section className="post"
>
   {props.profileData.map((post)=> (
    
  <div className="post-data">posted by#: {post.username} <p></p>
  formula :{post.formula_name} 
  <p></p>Address: {post.address}
  <p></p>Date: {post.date}
  <p></p>Picked Up? : {post.available ? "No":"Yes"}
  <p></p>
  <button>Map It</button>
  <p></p></div>

  ))}

</section>




   {/* {props.profileData.map((post) => (
    <PostData
    key={post.post_id}
    post_id={post.post_id}
    quantity={post.quantity}
    forumla_name={post.forumla_name}
    username={post.username}
    address={post.address}
    />
   ))} */}

  </section>
 
)};


export default Profile;