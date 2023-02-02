import React from "react";
import { useState } from "react";
import axios from "axios";

const kBaseUrl = "http://localhost:5000/"

const directionsAPI = (data) => {
  const currentData = {...data};
  return axios 
  .get(`${kBaseUrl}/maps`, currentData)
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    console.log(err)
  })

}

// const getDirections = (address) => {


//   directionsAPI(address)
//   .then((directions) => {
//    const legs = [];
//    const steps = directions.routes[0].legs[0].steps
//    for(let i = 0; i< steps.length; i++){
//     const a = steps[i].html_instructions.replace(/<[^>]*>/g,'')
     
     
   
//      // legs.push(steps[i].html_instructions)
//      legs.push(i+1 + ".")
//      legs.push(a)
//      legs.push('')
  
//    }
//    // directions.routes[0].legs[0].duration.text
//    // console.log(steps[i].html_instructions)
   
//    setaddress(legs) 
   
//    // console.log(legs)
 
//   })
//   .catch((e) => console.log(e));
//  };
const Directions = (props) => {
  const [origin, setOrigin] = useState([])
  return (
    <section className="profile-background">
    <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
    <button className="bton" onClick={() => props.logout()}>Logout</button>
    <button className="btnn" onClick={() => props.editUserClick()}>Edit User Information</button>
    <button className="bton" onClick={() => props.profileClick()}>Profile</button>
  </section>);
}


export default Directions;