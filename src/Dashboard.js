import React from "react";
import './Profile.css'; 


const Dashboard = (props) => {


return (
<section className="profile-background">
{/* <div class="jumbotron">
  <h1 class="display-4">Got Milk ?</h1>
  <hr class="my-4"/>  */}
  <h1>Welcome {props.currentUser.username}!</h1>
  <p></p>
  <h5>  Below is your milk dashboard where we help keep babies fed</h5>
  <p></p>
  <h6>Happy feeding!</h6>

 
   <button type="button"className="btn btn-primary" onClick={() => props.postClick()}>Make a Post</button>
  <button type="button"className="btn btn-primary" onClick={() => props.logout()}>Logout</button>
  <button type="button"className="btn btn-primary" onClick={() => props.profileClick()}>Account</button>
  <p></p>
    
<h2 >
 {props.profileData.length === 0  ? "Sorry, there is no available formula 😭 ":"All Available 🍼:"}</h2>
 <p className={props.profileData.length === 0 ? "containers":"posts"}></p>
 <p></p>
 {props.profileData.map((post )=> (
  
    <div className={post.available ? "green":"red"} >  posted by#: {post.username} <p></p>
    formula :{post.formula_name} 
    <p></p>Address: {post.address}
    <p></p>Date: {post.date}
    <p></p>Available? : {post.available === true ? "Yes":"No"}
    <p></p>
    <button onClick={() => props.directionsClick({"origin":props.currentUser.address,"destination":post.address, "post":post.post_id, "post_address":post.address})}>Map It</button>
    <p></p>
    
    </div>
 
    ))}


{/* </div> */}
</section>
)


};

export default Dashboard;