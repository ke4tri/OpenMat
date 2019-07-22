import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import gymRequests from '../../helpers/data/gymRequests'

class MapFunction extends React.Component {
  state = {
    gyms: [],
    // selectedGym:[] ,
    toggle: ''
  }

 getGymJson = () => {
  gymRequests.getAllGyms()
    .then((data) => {
      console.log(data);
      this.setState({gyms:data});
    }).catch(err => console.error('error getting gyms', err));
  }

  componentDidMount = () => {
    this.getGymJson();
  }

  render() {
  return (
    <GoogleMap 
      defaultZoom={8} 
      defaultCenter={{ lat: 35.517490, lng: -86.580444 }}
      >
      <React.Fragment>
      {this.state.gyms.map(gym => (
        <Marker 
        key={gym.id} 
        position={{
          lat: gym.lat, 
          lng: gym.lng
        }} 
        onClick={() => {
          this.setState({selectedGym: gym})
        }}
        />
       ))} 
        
      {this.state.selectedGym && (
      <InfoWindow
        position={{ lat: this.state.selectedGym.lat, lng: this.state.selectedGym.lng }} >
        <div>{this.state.selectedGym.name}</div>
      </InfoWindow>
      )}
       </React.Fragment>
    </GoogleMap>
    );
   } 
  }

  export default MapFunction;