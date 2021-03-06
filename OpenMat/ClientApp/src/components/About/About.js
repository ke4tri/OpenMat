import React from 'react';
import { Link } from "react-router-dom";
import YouTubeComp from "../YouTubeComp/YouTubeComp"
import './About.css';

class About extends React.Component {

  render() {
    
    return (
      <div className="aboutWrap homeImageAbout">
      <div className="">
        <div className="aboutLinks">
         <div className="aboutLink"><Link to="/">HOME</Link></div> 
         <div className="aboutLink"><Link to="/map">MAP</Link></div>        
        </div> 
        <div className='aboutComp'>
          <div className='video'><YouTubeComp /></div>
        </div>
      </div>
    </div>
    );
  }
}

export default About;