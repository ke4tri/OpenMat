import React from 'react';
import { Link } from "react-router-dom";
import './Map.css';


class MapComp extends React.Component {

  render() {
    
    return (
      <div className="mapWrap homeImageMap">
        <div className="mapLink">

          <div className="mapHomeLinks">
           <div className="mapHomeLink"><Link to="/">HOME</Link></div> 
           <div className="mapHomeLink"><Link to="/about">ABOUT</Link></div>        
          </div> 

          <div className='mapComp'>
            <h1>This is MAP</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MapComp;