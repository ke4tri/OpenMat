import React from 'react';
import userRequests from '../../helpers/data/userRequests';
import openMatRequests from '../../helpers/data/openMatRequests';
import SingleDate from '../../components/SingleDate/SingleDate';
import { Link } from "react-router-dom";
import './OpenMatts.css';

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

  onSubmit = (newUser) => {
    console.log(newUser);
    userRequests.createUser(newUser).then((result) => {
      console.log(result);
      this.props.history.push('/map');
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
    openMatRequests(gymid)
    .then((data) => {
      this.setState({openMat:data});
      console.log(this.state.openMat)
    }).catch(err => console.error('error getting open mats', err));
  }

  componentWillMount() {
    this.gymsOpenMats();
  }

  render() {

    const productBuilder = this.state.openMat.map((mat) => {
      console.log(mat.date)
      return (
        <SingleDate
        date={mat.date}
        gymId={this.props.location.state.passingGym}
        openMatId={mat.id}
      />);
    });

    return (
       <div> 
          <div>{productBuilder} </div>
          {/* <div><Link to="/userform">Join Open Matt</Link></div> */}
       </div>
    );
  }
}

export default OpenMatts;