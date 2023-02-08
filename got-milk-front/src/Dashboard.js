import React from "react";


const Dashboard = (props) => {


return (
<section className="profile-background">
  Milk Dashboard!
  <p></p>
  Logged in as:  {props.currentUser.username}
  <p></p>
   
  <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
  <button className="bton" onClick={() => props.logout()}>Logout</button>
  <button className="bton" onClick={() => props.profileClick()}>Profile</button>
 
<p></p>
 All Posts:
 <p></p>
 <p></p>
 {props.profileData.map((post )=> (
  
    <div className={post.available ? "green":"red"} >  posted by#: {post.username} <p></p>
    formula :{post.formula_name} 
    <p></p>Address: {post.address}
    <p></p>Date: {post.date}
    <p></p>Available? : {post.available === true ? "Yes":"No"}
    <p></p>
    <button onClick={() => props.directionsClick({"origin":props.currentUser.address,"destination":post.address, "post":post.post_id, "post_address":post.address})}>Map It</button>
    <p></p></div>


    ))}
</section>
)


};

export default Dashboard;