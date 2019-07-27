import React from 'react';
import { withScriptjs, withGoogleMap } from "react-google-maps";
import googleApi from "../../helpers/mapsApi"
import MapFunction from '../../components/Map/MapFunction'
import { Link } from "react-router-dom";
import './Map.css';

const WrappedMap = withScriptjs(withGoogleMap(MapFunction));

class MapComp extends React.Component {
  
  render() {
    return (
      <div className="mapWrap homeImageMap">
        <div className="mapLink">
          <div className="mapHomeLinks">
           <div className="mapHomeLink"><Link to="/">HOME</Link></div> 
           <div className="mapHomeLink"><Link to="/about">ABOUT</Link></div> 
           <div className="mapHomeLink"><Link to="/gymform">ADD GYM</Link></div>         
          </div> 
          <div className='' style={{width: '100vw', height: '100vh'}}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleApi}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MapComp;