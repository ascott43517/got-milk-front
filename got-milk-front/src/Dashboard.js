import React from "react";
import { useState } from "react";

const Dashboard = (props) => {
return (
<section className="profile-background">
  Milk Dashboard!
  <p></p>
  Logged in as:  {props.currentUser.username}
  <p></p>
   
  <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
  <button className="bton" onClick={() => props.logout()}>Logout</button>
  {/* <button className="btnn" onClick={() => props.editUserClick()}>Edit User Information</button> */}
  <button className="bton" onClick={() => props.profileClick()}>Profile</button>
  {/* <button className="bton" onClick={() => props.directionsClick()}>Directions</button> */}
<p></p>
 All Posts:
 <p></p>
 <p></p>
 {props.profileData.map((post )=> (
    
    <div className="post-data">  posted by#: {post.username} <p></p>
    formula :{post.formula_name} 
    <p></p>Address: {post.address}
    <p></p>Date: {post.date}
    <p></p>Available? : {post.available === true ? "Yes":"No"}
    <p></p>
    <button onClick={() => props.directionsClick({"origin":props.currentUser.address,"destination":post.address, "post":post.post_id, "post_address":post.address})}>Map It</button>
    <p></p></div>
  
  // const dashboardClick = () => {
  //   setCurrentPageName("Dashboard")
  // }

  //  getAllPostsApi().then((user) =>{
      //    console.log(user)
      //   setProfileData(user)
      //  })



// const getAllPostsApi = () => {
//   return axios
//     .get(`${kBaseUrl}/posts`)
//     .then((response) => {
      
//       return response.data;
      
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


    ))}
</section>
)


};

export default Dashboard;