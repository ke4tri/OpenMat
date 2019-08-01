import React from 'react';
import { Link } from "react-router-dom";
import openMatRequests from '../../helpers/data/openMatRequests'
import './AddOpenMat.css';

const defaultForm = {
  date:'',
  gymid: 0 
}

class AddOpenMat extends React.Component {
  state = {
    newUser: defaultForm
  }

  formFieldDateState = (name, e) => {
    const tempUser = { ...this.state.newUser };
    tempUser[name] = e.target.value;
    this.setState({ newUser: tempUser });
  }

  dateChange = e => this.formFieldDateState('date', e);

  onSubmit = (newUser) => {
    openMatRequests.createOpenMat(newUser).then((result) => {
      this.props.history.push('/map');
    }).catch(err => console.error('error creating user', err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state.newUser };
    newUser.gymid = this.props.location.state.selectedGym.id
    this.onSubmit(newUser);
    this.setState({
    });
  };
  
  render() {
    const { newUser } = this.state;

    return (
      <div className="mapWrap homeImageMap">
         <div className=" d-flex wrapFormDiv card p-5 mx-auto">
           <div>
            <Link to="/map" className="test">MAP</Link>
          </div>
          <div>
            <Link to="/home" className="test">HOME</Link>
          </div>    
        <div className="contact-container">
           <form className="well form-horizontal" onSubmit={this.formSubmit} action=" " method="post"  id="contact_form">
              <fieldset>
                 <legend>
                    <center>
                       <h2><b>Creating Open Mat</b></h2>
                    </center>
                 </legend>
                 <div className="form-group">
                    <label className="col-md-2 control-label"></label>  
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input 
                           name="datetime" 
                           placeholder="01/01/2000 00:00" 
                           className="form-control"  
                           type="text" 
                           onChange={this.dateChange} 
                           value={newUser.date} 
                           required 
                           />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-5 control-label"></label>
                    <div className="col-md-4"><button type="submit" className="btn btn-warning" >Submit</button></div>
                 </div>
              </fieldset>
           </form>
        </div>
     </div>
      </div>
    );
  }
}

export default AddOpenMat;