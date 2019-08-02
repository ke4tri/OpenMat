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
    }).catch(err => console.error('error creating user', err));
  }

  onSubmit = (newUser) => {
    userRequests.createUser(newUser).then((result) => {
      this.getOMUsers();
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
    <div className="product-details">
        <div className="butDiv">
            <h1>Join Open Mat</h1>
            <div>
                <button className="btn mt-4 buttonPad">
                    <Link to="/home">HOME</Link>
                </button>
            </div>
            <div>
                <button className="btn mt-4 buttonPad2">
                    <Link to="/map">MAP</Link>
                </button>
            </div>
        </div>
        <div className="control">
            <button className="btn">
                <span className="price">?</span>
                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"><Link to={{ pathname: '/addOpenMat',state: { selectedGym: this.props.location.state.passingGym}}}>Add an Open Mat</Link></i></span>
                <span className="buy">Dont See an Open Mat?</span>
            </button>
        </div>
    </div>
    <div className="product-image">
        <img src="https://github.com/ke4tri/Images/blob/master/Bjj3_Opacity.png?raw=true" alt="Omar Dsoky" />
        <div className="info">
            <h2>NO OPEN MATS</h2>
        </div>
    </div>
      </div>
        
  </div>
       
        
      )
    }

    return (
<div>
  <div id="container">
      <div className="product-details">
          <div className="butDiv">
              <h1>Join Open Mat</h1>
              <div className="buttonWrap">
                  <button className="btn mt-4 buttonPad">
                      <Link to="/home">HOME</Link>
                  </button>
              </div>
              <div className="buttonWrap">
                  <button className="btn mt-4 buttonPad2">
                      <Link to="/map">MAP</Link>
                  </button>
              </div>
          </div>
          <div className="control">
              <button className="btn">
                  <span className="price">?</span>
                  <span className="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"><Link to={{ pathname: '/addOpenMat',state: { selectedGym: this.props.location.state.passingGym}}}>Add an Open Mat</Link></i></span>
                  <span className="buy">Dont See an Open Mat?</span>
              </button>
          </div>
      </div>
      <div class="product-image">
          <img src="https://github.com/ke4tri/Images/blob/master/Bjj3_Opacity.png?raw=true" alt="Omar Dsoky" />
          <div class="info">
              <h2>The Description</h2>
              <ul>
                  <p className="mt-2">{productBuilder}</p>
              </ul>
          </div>
      </div>
  </div>
</div>
    );
  }
}

export default OpenMatts;