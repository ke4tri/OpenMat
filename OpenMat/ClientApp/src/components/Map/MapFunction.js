import React from 'react';
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";
import gymRequests from '../../helpers/data/gymRequests';
import mapStyles from '../../helpers/data/mapStyles';

class MapFunction extends React.Component {
  state = {
    gyms: [],
    toggle: '',
    passingGym: [],
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
      defaultZoom={9} 
      defaultCenter={{ lat: 36.180467, lng: -86.794887 }}
      defaultOptions={{ styles: mapStyles }}
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
        icon={{
          url:"https://s3.amazonaws.com/zenplannerwordpress-stack0/wp-content/uploads/sites/287/2018/09/19095359/MLU-Home.png",
          scaledSize: new window.google.maps.Size(50, 50)
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
            <div><h2><b>{this.state.selectedGym.name} </b></h2></div>
              <div><h4><span><b>Phone: </b></span>{this.state.selectedGym.phone}</h4> </div>
            <div><h4>
            <span><b>Address: </b></span>
            {this.state.selectedGym.address1} {this.state.selectedGym.city}, {this.state.selectedGym.zipcode}
         </h4>
          </div>
          <div><Link to={{ pathname: '/openmatts', state: {passingGym : this.state.selectedGym}}}>Click for Open Mats</Link></div>
          
          {/* <div><Link to={{ pathname: '/userform', state: {passingGym : this.state.selectedGym}}}>OpenMats</Link></div> */}
          </React.Fragment>
          
      </InfoWindow>
      )}
       </React.Fragment>
    </GoogleMap>
    );
   } 
  }

  export default MapFunction;