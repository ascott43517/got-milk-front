import React from "react";
import { useState } from "react";
import Directions from "./Directions";
import Login from "./Login";
import NewUserForm from "./NewUserForm";
import Profile from "./Profile";



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
    handleLoginSubmit = {props.handleLoginSubmit}/>
   }
   if (currentPage ==="Profile"){
    return <Profile 
    handleLoginSubmit={props.handleLoginSubmit}
    currentUser = {props.currentUser}
    setCurrentUser = {props.setCurrentUser}/>
   }
}

export default PageContent;