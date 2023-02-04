import React from "react";
import { useState } from "react";
import axios from "axios";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

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

const getDirections = (address) => {


 directionsAPI(address)
   .then((directions) => {
    const legs = [];
    const steps = directions.routes[0].legs[0].steps
    for(let i = 0; i< steps.length; i++){
     const a = steps[i].html_instructions.replace(/<[^>]*>/g,'')
     
     
   
       legs.push(steps[i].html_instructions)
      legs.push(i+1 + ".")
      legs.push(a)
      legs.push('')
  
    }
    //  directions.routes[0].legs[0].duration.text    
     
    //  console.log(steps[i].html_instructions)
   
    // setaddress(legs) 
   
     console.log(legs)
 
   })
   .catch((e) => console.log(e));
  };


const center = {lat: 48.85, lng: 2.2945}

const Directions = (props) => {
  const [origin, setOrigin] = useState([]);

  
return (
    <section className="profile-background">
     <div className="dashboard">Stay calm! You are only {props.time} from feeding your baby! </div>
  

    <p></p>

    <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
    <button className="bton" onClick={() => props.logout()}>Logout</button>
    {/* <button className="btnn" onClick={() => props.editUserClick()}>Edit User Information</button> */}
    <button className="bton" onClick={() => props.dashboardClick()}>Dashboard</button>
    <p></p>

    ONE DAY A MAP MIGHT GO HERE LOL
 
    <p></p>

       Directions to your forumula:
    <p></p>
    {/* {isLoaded} */}
    {props.address.map((step)=> (<div>
      {step}</div>))}
  </section>
);
    }




export default Directions;