import React from "react";
import './Profile.css';
import {GoogleMap,MarkerF, } from '@react-google-maps/api'
import './Directions.css';




const containerStyle = {
  width: 400,
  height: 400,
  textalign:'center'
};

const Directions = (props) => {
 
return (
    <section className="profile-background">
     <h1 className="dashboard">Stay calm! You are only {props.time} from feeding your baby! </h1>
  
     
    <p></p>

    <button className="bton" onClick={() => props.postClick()}>Make a Post</button>
    <button className="bton" onClick={() => props.logout()}>Logout</button>
    <button className="bton" onClick={() => props.dashboardClick()}>Dashboard</button>
    <p></p>

    <div className="container">
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center= {{lat:props.lat, lng: props.lng}}
        zoom={10}
        options={{zoomControl:false,
                  streetViewControl: false,
                  mapTypeControl:false,
                  fullscreemControl: false
                }}
      >
  <MarkerF position={{lat:props.postlat, lng: props.postlng}}/>
     <MarkerF position={{lat:props.lat, lng: props.lng}}/> 
        <></>
      </GoogleMap>

     </div>

    <p></p>
     <div className="directions">
       Directions to your forumula:
    <p></p>

    {props.address.map((step)=> (<div>
      {step}</div>))}
      </div>
  </section>


);
    }




export default Directions;