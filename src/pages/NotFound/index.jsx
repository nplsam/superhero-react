import React from "react";
import { useLocation, Link } from "react-router-dom";


const NotFound = () => {
 
  const location = useLocation();

  return (
    <>
    
    <h1>Page <span style={{ color: "azure" }}>{location.pathname}</span> not found
      </h1>
      <Link to="/" style={{
        color: "azure", fontWeight: "bold"
      }}> Home Page &rarr;</Link>
    </>
  )
};

export default NotFound;

