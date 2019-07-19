import React from 'react';
import { Link } from "react-router-dom";
import './About.css';


class About extends React.Component {

  render() {
    
    return (
      <div className="aboutWrap homeImageAbout">
      <div className="aboutLink">

        <div className="aboutLinks">
         <div className="aboutLink"><Link to="/">HOME</Link></div> 
         <div className="aboutLink"><Link to="/map">MAP</Link></div>        
        </div> 

        <div className='aboutComp'>
          <h1>This is ABOUT</h1>
        </div>
      </div>
    </div>
    );
  }
}

export default About;