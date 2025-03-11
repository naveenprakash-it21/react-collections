import {Outlet} from "react-router-dom";
import React from 'react'

const UserLayout = () => {
  return (
    <div className="container">
       <h1>UserLayout</h1> 
       <p> Good soul will always suffer </p>
       <Outlet/> 
    </div>
  )
}

export default UserLayout
// <Outlet> navigate to the pages and 
// give content in the pages 