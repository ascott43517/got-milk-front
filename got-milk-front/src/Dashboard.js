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
  <button className="btnn" onClick={() => props.editUserClick()}>Edit User Information</button>
<p></p>
 All Posts:
 {props.profileData.map((post)=> (
    
    <div className="post-data">posted by#: {post.username} <p></p>
    formula :{post.formula_name} 
    <p></p>Address: {post.address}
    <p></p>Date: {post.date}
    <p></p>Picked Up? : {post.available ? "Yes":"No"}
    <p></p>
    <button>Map It</button>
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