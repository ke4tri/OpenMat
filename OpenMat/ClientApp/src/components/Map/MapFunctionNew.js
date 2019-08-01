import React from "react";
import { GoogleMap, Marker, withGoogleMap,withScriptjs } from "react-google-maps";
import gymRequests from '../../helpers/data/gymRequests'
import googleApi from "../../helpers/mapsApi"
import { Link } from "react-router-dom";
import './Map.css';

function Map() {
  state ={
    gyms: []
  }

  componentDidMount = () => {
    this.getGymJson();
  }
  
  return (
    <GoogleMap 
      defaultZoom={8} 
      defaultCenter={{ lat: 35.517490, lng: -86.580444 }}
      >
      {this.state.gyms.map(gym => (
        <Marker 
        key={gym.id} 
        position={{
          lat: gym.lat, 
          lng: gym.lng
        }} 
        />
       ))}  
    </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class MapApp extends React.Component {
  
  render() {
  
    return (
      <div className="mapWrap homeImageMap">
        <div className="mapLink">
          <div className="mapHomeLinks">
           <div className="mapHomeLink"><Link to="/">HOME</Link></div> 
           <div className="mapHomeLink"><Link to="/about">ABOUT</Link></div>        
          </div> 
          <div className='' style={{width: '50vw', height: '50vh'}}>
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