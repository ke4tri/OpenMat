import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import googleApi from "../../helpers/mapsApi"
import gymRequests from '../../helpers/data/gymRequests'
import * as gymJson from "../../helpers/data/gymJsons.json"
import { Link } from "react-router-dom";
import './Map.css';


// const getGymJson = () => {
//   gymRequests.getAllGyms()
//     .then((data) => {
//       console.log(data);
//       return data;
//     }).catch(err => console.error('error getting gyms', err));
//   }

  // function Map() {
  //   getGymJson();
  //   return (
  //     <GoogleMap 
  //       defaultZoom={8} 
  //       defaultCenter={{ lat: 35.517490, lng: -86.580444 }}
  //      />
  //     );
  // }

function Map() {
  // const  newJson = getGymJson();

  return (
    <GoogleMap 
      defaultZoom={8} 
      defaultCenter={{ lat: 35.517490, lng: -86.580444 }}
      >
      {gymJson.jsonGyms.map(gym => (
        <Marker 
        key={gym.id} 
        position={{
          lat: gym.lat, 
          lng: gym.lng}} 
        />
       ))}  
    </GoogleMap>
    );
} 

const WrappedMap = withScriptjs(withGoogleMap(Map));

class MapComp extends React.Component {
state = {
  gyms: []
}

  // getGymJson = () => {
  //   gymRequests.getAllGyms()
  //   .then((data) => {
  //     console.log(data)
  //   }).catch(err => console.error('error getting products', err));
      
  //   }
  
  

  componentDidMount = () => {
    // this.getGymJson();
}

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


export default MapComp;