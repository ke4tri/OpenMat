import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import gymRequests from '../../helpers/data/gymRequests'

class MapFunction extends React.Component {
  state = {
    gyms: [],
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
      defaultCenter={{ lat: 36.180467, lng: -86.794887 }}
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
      onCloseClick={() => {
        this.setState({selectedGym: null})
      }}
        position={{ lat: this.state.selectedGym.lat, lng: this.state.selectedGym.lng }} >
         
          <React.Fragment>
            <div><b>{this.state.selectedGym.name} </b></div>
              <div><span><b>Phone: </b></span>{this.state.selectedGym.phone} </div>
            <div>
            <span><b>Address: </b></span>
            {this.state.selectedGym.address1} {this.state.selectedGym.city}, {this.state.selectedGym.zipcode}
          </div>
          </React.Fragment>
          
      </InfoWindow>
      )}
       </React.Fragment>
    </GoogleMap>
    );
   } 
  }

  export default MapFunction;