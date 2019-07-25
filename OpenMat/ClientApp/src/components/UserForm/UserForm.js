import React from 'react';
import googleApi from "../../helpers/mapsApi"
import MapFunction from '../../components/Map/MapFunction'
import { Link } from "react-router-dom";
import './UserForm.css';


const defaultForm = {
  firstName: '',
  lastName: '',
  rank: '',
  affiliation: '',
  address2: '',
  competitor: '' 
}

class UserForm extends React.Component {
  state = {
    newUser: defaultForm,
  }

  render() {
    const { newUser } = this.state;

    return (
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
                       <h2><b>Join This Open Mat</b></h2>
                    </center>
                 </legend>
                 <div className="form-group">
                    <label className="col-md-4 control-label">FirstName</label>  
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input 
                           name="firstName" 
                           placeholder="FirstName" 
                           className="form-control"  
                           type="text" 
                           onChange={this.firstNameChange} 
                           value={newUser.firstName} 
                           required 
                           />
                       </div>
                    </div>
                 </div>
                 {/* <!-- Text input--> */}
                 <div className="form-group">
                    <label className="col-md-4 control-label">LastName</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input 
                          name="lastName" 
                          placeholder="1234567890" 
                          className="form-control"  
                          type="text" 
                          onChange={this.lastNameChange}
                          value={newUser.lastName}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Rank</label> 
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
                    <label className="col-md-4 control-label">Affiliation</label> 
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
                    <label className="col-md-4 control-label">Competitor</label> 
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
                    <div className="col-md-4"><button type="submit" className="btn btn-warning" >Submit</button></div>
                 </div>
              </fieldset>
           </form>
        </div>
     </div>
    );
  }
}

export default UserForm;