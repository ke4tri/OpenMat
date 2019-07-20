import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";


export class Home extends React.Component {

  render() {
    
    return (
      <div className="divWrap homeImage">
      <div className="classLink ">
        
        <div className="homeLinks ">
         <div className="homeLink aTags"><Link to="/">HOME</Link></div> 
         <div className="homeLink aTags"><Link to="/about">ABOUT</Link></div> 
         <div className="homeLink aTags"><Link to="/map">MAP</Link></div>
        </div>

        <div className="homeH1">
          <h1>OPEN MAT</h1>
        </div> 
        
       </div>
       </div>
    
    );
  }
}


