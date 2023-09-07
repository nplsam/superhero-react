import React from "react";
import { useLocation, Link } from "react-router-dom";
import './style.css'

const NotFound = () => {
 
  const location = useLocation();

  return (
    <>
    
    <h1>Page <span>{location.pathname}</span> not found
      </h1>
      <Link to="/" style={{
        color: "#fffff2", fontWeight: "bold"
      }}> Home Page &rarr;</Link>
    </>
  )
};

export default NotFound;
