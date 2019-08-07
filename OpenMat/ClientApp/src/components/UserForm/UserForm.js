import React from 'react';
import user2Requests from '../../helpers/data/user2Requests';
import AttendingUsers from '../AttendingUsers/AttendingUsers';
import { Link } from "react-router-dom";
import './UserForm.css';

const defaultForm = {
  firstName: '',
  lastName: '',
  rank: '',
  affiliation: '',
  competitor: '',
  gymid: 0 ,
  openmatid: 0
}

class UserForm extends React.Component {
  state = {
    newUser: defaultForm,
    openMatDate: '',
    selectedGymInfo: 0,
    openMatId:0,
    omUsers:[]
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
 
  getAttendingUsers = () => {
   const gymid = this.props.location.state.combinedProps[1].id;
  user2Requests.getOMUsers(gymid)
  .then((data) => {
    this.setState({omUsers:data});
  }).catch(err => console.error('error getting attending users', err));
}

  onSubmit = (newUser) => {
   user2Requests.createUser(newUser).then((result) => {
   // this.props.history.push('/openmatts');
   // const newOmUsers = {...this.state.omUsers};
   // this.setState({omUsers: newOmUsers})
   // this.forceUpdate();
   this.getAttendingUsers();
   }).catch(err => console.error('error creating user', err));
 }
   
  formSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state.newUser };
    newUser.gymid = this.state.selectedGymInfo.id
    newUser.openmatid = this.state.openMatId
    this.onSubmit(newUser);
    this.setState({
      newUser: defaultForm,
    });
  };



  reSetState = () => {
     const propState = this.props.location.state.combinedProps;
     this.setState({openMatDate: propState[0]});
     this.setState({selectedGymInfo: propState[1]});
     this.setState({openMatId: propState[2]});
    };

  
  componentWillMount () {
   this.getAttendingUsers();
  }

  componentDidMount () {
   this.reSetState();
  }

  render() {
    const { newUser, omUsers } = this.state;
  
    const attendingBuilder = omUsers.map((user) => {
      return (
        <AttendingUsers
        firstName={user.firstName}
        lastName={user.lastName}
        rank={user.rank}
        affiliation={user.affiliation}
      />);
    });

    return (
       <div> 
         {/* /////////table below//////// */}
<div className="well form-horizontal tableDiv mx-auto">
         <table class="table table-striped table-dark">
            <thead>
              <tr>
                  <th scope="col">ATTENDING</th>
               </tr>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Belt</th>
                  <th scope="col">Affiliation</th>
               </tr>
            </thead>
            <tbody>
            {attendingBuilder}
            </tbody>
         </table>
         </div>
         {/* /////////table above//////// */}
      <div className=" d-flex userFormDiv card p-5 mx-auto">
           <div>
            <Link to="/map" className="navLink">MAP</Link>
          </div>
          <div>
            <Link to="/home" className="navLink">HOME</Link>
          </div>    
        <div className="contact-container">
           <form className="well form-horizontal" onSubmit={this.formSubmit} action=" " method="post"  id="contact_form">
              <fieldset>
                 <legend>
                    <center>
                       <h2><b>Join This Open Mat</b></h2>
                    </center>
                 </legend>
                 <div className="form-group">
                    <label className="col-md-2 control-label"></label>  
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input 
                           name="firstName" 
                           placeholder="First Name" 
                           className="form-control"  
                           type="text" 
                           onChange={this.firstNameChange} 
                           value={newUser.firstName} 
                           required 
                           />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-2 control-label"></label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input 
                          name="lastName" 
                          placeholder="Last Name" 
                          className="form-control"  
                          type="text" 
                          onChange={this.lastNameChange}
                          value={newUser.lastName}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-2 control-label"></label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-queen"></i></span>
                          <input 
                          name="rank" 
                          placeholder="Rank" 
                          className="form-control"  
                          type="text" 
                          onChange={this.rankChange}
                          value={newUser.rank}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-2 control-label"></label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-tower"></i></span>
                          <input 
                          name="affiliation" 
                          placeholder="Affiliation" 
                          className="form-control"  
                          type="text" 
                          onChange={this.affiliationChange}
                          value={newUser.affiliation}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-2 control-label"></label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-knight"></i></span>
                          <input 
                          name="Competitor" 
                          placeholder="Competitor" 
                          className="form-control"  
                          type="text" 
                          onChange={this.competitorChange}
                          value={newUser.competitor}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-5 control-label"></label>
                    <div className="col-md-4"><button type="submit" className="btn btn-warning p-3" >Submit</button></div>
                 </div>
              </fieldset>
           </form>
        </div>
     </div>
     </div>
    );
  }
}

export default UserForm;