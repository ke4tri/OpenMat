import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";


export class Home extends React.Component {

  render() {
    
    return (
      <div className="divWrap homeImage">
      <div className="classLink ">
        
        <div className="homeLinks ">
          {/* <div>
            <Link to="/" className="test"></Link>
          </div> */}
          <div>
            <Link to="/about" className="test">ABOUT</Link>
          </div>
          <div>
            <Link to="/map" className="test">MAP</Link>
          </div>         
        </div>

        <div className="homeH1">
          <div className="openMatText">OPEN MAT</div>
        </div> 
        
       </div>
       </div>
    
    );
  }
}


