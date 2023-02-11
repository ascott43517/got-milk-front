import React from "react";
import './Dashboard.css'; 


const Dashboard = (props) => {


return (
<section className="profile-background">
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
<ul class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="button" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {props.currentUser.username}
    </a>

<div className="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="button">Account</a>
          <a class="dropdown-item" href="button" >Make a Post</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="button" >Logout</a>
          
          </div>
          </ul>
          </nav> */}
          
          
{/* <div class="jumbotron">
  <h1 class="display-4">Got Milk ?</h1>
  <hr class="my-4"/>  */}
  <h2 className="welcome">Welcome {props.currentUser.username}!</h2>

  {/* <h1 >
//  {props.profileData.length === 0  ? "Sorry, there is no available formula  ":"Available 🍼:"}</h1>   */}
  {/* <h5>  Below is your milk dashboard where we help keep babies fed</h5> */}
  <p></p> 
  <button type="button"className="btn btn-secondary" onClick={() => props.postClick()}>Make a Post</button>
  <button type="button"className="btn btn-secondary" onClick={() => props.logout()}>Logout</button>
  <button type="button"className="btn btn-secondary" onClick={() => props.profileClick()}>Account</button> 
  
  <p></p>
  <p></p>

 {/* <h3>{props.profileData.length === 0  ? "Sorry, there is no available formula  ":"Available 🍼:"}</h3> */}
 <p className={props.profileData.length === 0 ? "containers":"posts"}>
 <div className="message">{props.profileData.length === 0  ? "Sorry, there is no available formula  ":"Formula is just a click away!"}</div> </p>
 <p></p>
 {props.profileData.map((post )=> (
 
    <div className={post.available ? "green":"red"}> <div className="number"></div> <p></p>
    Formula :{post.formula_name} 
    <p></p>
    
    <p></p>Address: {post.address}
    <p></p>Date: {post.date}
    <p></p>Available?  {post.available === true ? "Yes" :"No"} - {post.quantity}
    <p></p>
    <button type="button"className="btn btn-secondary" onClick={() => props.directionsClick({"origin":props.currentUser.address,"destination":post.address, "post":post.post_id, "post_address":post.address})}>Map It</button>
    <p></p>
 
    </div>
 
    ))}


{/* </div> */}

</section>
)


};

export default Dashboard;