import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../images/route.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
     
      <div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
        <div className="me-2">
          <img src={logo} alt="Route Logo" height={400} width={400} />
        </div>
       
      </div>
    </>
  );
}
