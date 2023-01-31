import React from "react";
import { useState } from "react";
import Directions from "./Directions";
import Login from "./Login";
import NewUserForm from "./NewUserForm";
import Profile from "./Profile";
import Post from "./Post";
import Edit from "./Edit";



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
    return <Directions/>
  }
   if (currentPage === "Login") {
    return <Login 
    setCurrentPageName = {props.setCurrentPageName}
    currentPage={props.currentPageName}
    handleLoginSubmit = {props.handleLoginSubmit}
    setCurrentUser={props.setCurrentUser}/>
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
    />
   }
   if (currentPage ==="Post"){
    return <Post
    postclick={props.postClick}
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    setCurrentPageName= {props.setCurrentPageName}/>
   }
   if (currentPage ==="Edit-User"){
    return <Edit
    editUserClick={props.editUserClick}
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    setCurrentPageName= {props.setCurrentPageName}
    handleEditProfileSubmit = {props.handleEditProfileSubmit}
    />
   }
}

export default PageContent;