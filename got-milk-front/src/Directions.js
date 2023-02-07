import React from "react";
import { useState } from "react";
import './Profile.css';
import {GoogleMap,Marker, } from '@react-google-maps/api'
import './Directions.css';




const containerStyle = {
  width: '500px',
  height: '500px',
  justify:'center'
};


const center = {
  lat: 47.2529, lng: -122.4443

}
const Directions = (props) => {
 

  //  const {isLoaded} = useJsApiLoader({
  //   googleMapsApiKey: 'AIzaSyD8c9x3lhVeazWn29rL5HrWJgT6FAJ-Bqc'

  //   })

    // console.log(isLoaded)

  //  if (isLoaded){
  //   return 'Loading'
  //  }


//  const never = props.getLatLngPost(props.postAddress)
//  console.log(props.postAddress)

//  const value = props.getLatLng(props.currentUser.address)
// console.log('user')
const userCenter = {
   lat: props.lat,
    lng: props.lng
   };
 console.log(userCenter)

const postCenter = {lat: props.postlat,
lng: props.postlng}
// console.log('post')
 console.log(postCenter)



return (
    <section className="profile-background">
     <div className="dashboard">Stay calm! You are only {props.time} from feeding your baby! </div>
  
     
    <p></p>

    <button className="btn" onClick={() => props.postClick()}>Make a Post</button>
    <button className="bton" onClick={() => props.logout()}>Logout</button>
    <button className="bton" onClick={() => props.dashboardClick()}>Dashboard</button>
    <p></p>

    <div style = {{align:center}}>ONE DAY A MAP MIGHT GO HERE LOL
    
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
 { <Marker position={{lat:props.postlat, lng: props.postlng}}/>}
     { <Marker position={{lat:props.lat, lng: props.lng}}/> }
        <></>
      </GoogleMap>
     {/* </LoadScript>  */}
     </div>

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