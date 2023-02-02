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
    return <Directions/>
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
    />
   }
   if (currentPage ==="Post"){
    return <Post
    // postclick={props.postClick}
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}
    setCurrentPageName= {props.setCurrentPageName}
    handlePostSubmit={props.handlePostSubmit}
    editUserClick={props.editUserClick}/>
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
    />
   }
}

export default PageContent;