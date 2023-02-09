import React from "react";
import './Profile.css';
import {GoogleMap,MarkerF, } from '@react-google-maps/api'
import './Directions.css';




const containerStyle = {
  width: '500px',
  height: '500px',
  textalign:'center'
};

const Directions = (props) => {
 
return (
    <section className="profile-background">
     <div className="dashboard">Stay calm! You are only {props.time} from feeding your baby! </div>
  
     
    <p></p>

    <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
    <button className="bton" onClick={() => props.logout()}>Logout</button>
    <button className="bton" onClick={() => props.dashboardClick()}>Dashboard</button>
    <p></p>

    <div >
    
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

       Directions to your forumula:
    <p></p>

    {props.address.map((step)=> (<div>
      {step}</div>))}

  </section>


);
    }




export default Directions;