import React from 'react';
import userRequests from '../../helpers/data/userRequests';
import openMatRequests from '../../helpers/data/openMatRequests';
import SingleDate from '../../components/SingleDate/SingleDate';
import { Link } from "react-router-dom";
import './OpenMatts.css';
import user2Requests from '../../helpers/data/user2Requests';

class OpenMatts extends React.Component {
  state = {
    openMat: [],
    newOpenMats: [],
    newUser: ''
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempUser = { ...this.state.newUser };
    tempUser[name] = e.target.value;
    this.setState({ newUser: tempUser });
  }

  formFieldDateState = (name, e) => {
    const tempUser = { ...this.state.newUser };
    tempUser[name] = e.target.value;
    this.setState({ newUser: tempUser });
  }

  firstNameChange = e => this.formFieldStringState('firstName', e);
  lastNameChange = e => this.formFieldStringState('lastName', e);
  rankChange = e => this.formFieldStringState('rank', e);
  affiliationChange = e => this.formFieldStringState('affiliation', e);
  competitorChange = e => this.formFieldStringState('competitor', e);

  getOMUsers = () => {
    const selectedGymId = this.props.location.state.passingGym.id;
    user2Requests.getOMUsers(selectedGymId).then((result) => {
      console.log(result);
    }).catch(err => console.error('error creating user', err));
  }

  onSubmit = (newUser) => {
    console.log(newUser);
    userRequests.createUser(newUser).then((result) => {
      console.log(result);
      this.getOMUsers();
      //Call function that displays people at this openmat
      //this.props.history.push('/map');
    }).catch(err => console.error('error creating user', err));
  }
   
  formSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state.newUser };
    this.onSubmit(newUser);
    this.setState({
    });
  };

  gymsOpenMats = () => {
    const gymid =  this.props.location.state.passingGym.id
    
    openMatRequests.getSingleOpenMat(gymid)
    .then((data) => {
      this.setState({openMat:data});
      console.log(data)
    }).catch(err => console.error('error getting open mats', err));
  }


  componentWillMount() {
    this.gymsOpenMats();
  }

  render() {

    const productBuilder = this.state.openMat.map((mat) => {
      return (
        <SingleDate
        date={mat.date}
        gymId={this.props.location.state.passingGym}
        openMatId={mat.id}
      />);
    });
    
    const opState = this.state.openMat;
    if(opState && !opState.length) {
      return (
        <div>
<div id="container">
    <div class="product-details">
        <div className="butDiv">
            <h1>Join Open Mat</h1>
            <div>
                <button className="btn mt-4 p-3">
                    <Link to="/home">HOME</Link>
                </button>
            </div>
            <div>
                <button className="btn mt-4 p-3">
                    <Link to="/map">MAP</Link>
                </button>
            </div>
        </div>
        <div class="control">
            <button class="btn">
                <span class="price">?</span>
                <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"><Link to={{ pathname: '/addOpenMat',state: { selectedGym: this.props.location.state.passingGym}}}>Add an Open Mat</Link></i></span>
                <span class="buy">Dont See an Open Mat?</span>
            </button>
        </div>
    </div>
    <div class="product-image">
        <img src="https://github.com/ke4tri/Images/blob/master/Bjj3.jpg?raw=true" alt="Omar Dsoky" />
        <div class="info">
            <h2>NO OPEN MATS</h2>
        </div>
    </div>
      </div>
         {/* <div className="">
            <div className="">
                <Link to="/home">
                HOME</Link>
            </div>
            <div className="">
                <Link to="/map">
                MAP</Link>
            </div>
          </div>
          <div className="">
            No Open mats
          </div>
          <div className="">
            <Link to={{ pathname: '/addOpenMat',state: { selectedGym: this.props.location.state.passingGym}}}>Add an Open Mat</Link>
       
          </div> */}
  </div>
       
        
      )
    }

    return (
<div>
  <div id="container">
      <div class="product-details">
          <div className="butDiv">
              <h1>Join Open Mat</h1>
              <div>
                  <button className="btn mt-4 p-3">
                      <Link to="/home">HOME</Link>
                  </button>
              </div>
              <div>
                  <button className="btn mt-4 p-3">
                      <Link to="/map">MAP</Link>
                  </button>
              </div>
          </div>
          <div class="control">
              <button class="btn">
                  <span class="price">?</span>
                  <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"><Link to={{ pathname: '/addOpenMat',state: { selectedGym: this.props.location.state.passingGym}}}>Add an Open Mat</Link></i></span>
                  <span class="buy">Dont See an Open Mat?</span>
              </button>
          </div>
      </div>
      <div class="product-image">
          <img src="https://github.com/ke4tri/Images/blob/master/Bjj3.jpg?raw=true" alt="Omar Dsoky" />
          <div class="info">
              <h2>The Description</h2>
              <ul>
                  <li className="mt-2">{productBuilder}</li>
              </ul>
          </div>
      </div>
  </div>
</div>
    );
  }
}

export default OpenMatts;