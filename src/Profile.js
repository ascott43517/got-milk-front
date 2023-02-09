import React from "react";
import './Profile.css';





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
  <button className="bton" onClick={() => props.dashboardClick()}>Back to Dashboard</button>
 

<section className="post"
>
Posts by You:
  <p></p>

  
   {props.profileData.map((post)=> (
    
  <div className={post.available ? "green":"red"}>posted by#: {post.username} <p></p>
  formula :{post.formula_name} 
  <p></p>Address: {post.address}
  <p></p>Date: {post.date}
  <p></p>Available? : {post.available === true ? "Yes":"No"}
  <p></p>
  <p></p></div>

  ))}

</section>

  </section>
 
)};


export default Profile;