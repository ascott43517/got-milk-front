import React from "react";
import { useState } from "react";
import Directions from "./Directions";
import Login from "./Login";
import NewUserForm from "./NewUserForm";
import Profile from "./Profile";
import Post from "./Post";
import Edit from "./Edit";
import Dashboard from "./Dashboard";



const PageContent = (props) => {
  const currentPage = props.currentPageName;
  

  if (currentPage === "New-User") {
    return <NewUserForm 
    handleUserSubmit={props.handleUserSubmit} 
    setCurrentPageName = {props.setCurrentPageName}
    currentPage={props.currentPageName}
    />
  }
  if (currentPage === "Directions") {
    return <Directions
    profileClick={props.profileClick}
    currentPage={props.currentPage}
    currentUser={props.currentUser}
    setCurrentUser={props.setCurrentUser}
    postClick= {props.postClick}
    editUserClick= {props.editUserClick}
    dashboardClick={props.dashboardClick}
    profileData={props.profileData}
    setProfileData={props.setProfileData}
    logout={props.logout}
    directionsClick={props.directionsClick}
    getDirections={props.getDirections}
    address={props.address}
    setaddress={props.setaddress}
    time={props.time}
    GoogleMap={props.GoogleMap}
    getLatLng={props.getLatLng}
    lng={props.lng}
    lat={props.lat}
    postAddress={props.postAddress}
    getLatLngPost = {props.getLatLngPost}
    setPostAddress={props.setPostAddress}
    setPostLat = {props.setPostLat}
    setPostLng={props.setPostLng}
    postlat={props.postlat}
    postlng={props.postlng}
    setlng={props.setlng}
    setlat={props.setlat}/>
  }
   if (currentPage === "Login") {
    return <Login 
    setCurrentPageName = {props.setCurrentPageName}
    currentPage={props.currentPageName}
    handleLoginSubmit = {props.handleLoginSubmit}
    setCurrentUser={props.setCurrentUser}
    // getAllPosts={props.getAllPosts}
    />
   }
   if (currentPage ==="Profile"){
    return <Profile 
    
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    postClick= {props.postClick}
    editUserClick= {props.editUserClick}
    getPosts = {props.getPosts}
    profileData={props.profileData}
    setProfileData={props.setProfileData}
    logout={props.logout}
    getUserPostAPI = {props.getUserPostAPI}
    handleLoginSubmit={props.handleLoginSubmit}
    dashboardClick={props.dashboardClick}
    directionsClick={props.directionsClick}
    />
   }
   if (currentPage ==="Post"){
    return <Post
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    setCurrentPageName= {props.setCurrentPageName}
    handlePostSubmit={props.handlePostSubmit}
    editUserClick={props.editUserClick}
    profileClick={props.profileClick}
    logout={props.logout}
    dashboardClick={props.dashboardClick}/>
   }
   if (currentPage ==="Edit-User"){
    return <Edit
    editUserClick={props.editUserClick}
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    setCurrentPageName= {props.setCurrentPageName}
    handleEditProfileSubmit = {props.handleEditProfileSubmit}
    postClick={props.postClick}
    dashboardClick={props.dashboardClick}
    profileClick={props.profileClick}
    directionsClick={props.directionsClick}
    logout={props.logout}
    />
   }
   if (currentPage ==="Dashboard"){
    return <Dashboard
    editUserClick={props.editUserClick}
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    setCurrentPageName= {props.setCurrentPageName}
    postClick={props.postClick}
    logout={props.logout}
    handlePostSubmit={props.handlePostSubmit}
    currentPage={props.currentPage}
    profileData={props.profileData}
    setProfileData={props.setProfileData}
    getAllPosts={props.getAllPosts}
    profileClick={props.profileClick}
    directionsClick={props.directionsClick}
    
    />
   }
}

export default PageContent;