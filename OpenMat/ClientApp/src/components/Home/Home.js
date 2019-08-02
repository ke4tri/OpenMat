import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";


export class Home extends React.Component {

  componentDidMount(){
    let spans = document.querySelectorAll('.word span');
    spans.forEach((span, idx) => {
    
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
        
      });
      
      
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx+1))
    });
  }

  render() {
    return (
      <div className="divWrap homeImage">
      <div className="classLink ">
        <div className="homeLinks ">
          <div>
            <Link to="/about" className="test">ABOUT</Link>
          </div>
          <div>
            <Link to="/map" className="test">MAP</Link>
          </div>         
        </div>

        <div className="homeH1 aniHome">
          <div className="word">
              <span>O</span>
              <span>P</span>
              <span>E</span>
              <span>N</span>
              <span>-</span>
              <span>M</span>
              <span>A</span>
              <span>T</span>
          </div>
        </div> 
       </div>
       </div>
    );
  }
}


