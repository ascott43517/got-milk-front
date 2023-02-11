import React from "react";
import './Profile.css';





const Profile = (props) => {
  console.log(props.profileData);
  
return(
  
  <section className="profile-background">
  

  <h1>Logged in as:  
    <p></p>
  
  {props.currentUser.username}
  <p></p>
  {props.currentUser.address}
  </h1>
  <p></p>
  
<p></p>

 
  <button className="btn btn-secondary" onClick={() => props.postClick()}>Make a Post</button>
  <button className="btn btn-secondary" onClick={() => props.editUserClick()}>Edit Account</button>
  <button className="btn btn-secondary" onClick={() => props.logout()}>Logout</button>
  <button className="btn btn-secondary" onClick={() => props.dashboardClick()}>Back to Dashboard</button>
 

<section className="post"
> <h2>
Posts by You:</h2>
  <p></p>

  
   {props.profileData.map((post)=> (
    
  <div className={post.available ? "green":"red"}> <p></p>
  Formula Name :{post.formula_name} 
  <p></p>Address: {post.address}
  <p></p>Date: {post.date}
  <p></p>Available?  {post.available === true ? "Yes":"No"}
  <p></p>
  <p></p></div>

  ))}

</section>

  </section>
 
)};


export default Profile;