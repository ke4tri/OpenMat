import React from 'react';
import gymRequests from '../../helpers/data/gymRequests';
import { Link } from "react-router-dom";
import './GymForm.css';

const defaultForm = {
  name: '',
  phone: '',
  affiliation: '',
  address1: '',
  address2: '',
  city: '',
  state:'',
  zipcode:'',
  lat: '',
  lng:'' 

}


class GymForm extends React.Component {
  static propTypes = {
    // customerObject: PropTypes.object,
    // onSubmit: PropTypes.func,
  }


  state = {
    newGym: defaultForm,
  }


  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempGym = { ...this.state.newGym };
    tempGym[name] = e.target.value;
    this.setState({ newGym: tempGym });
  }

  formFieldNumberState = (name, e) => {
    const tempGym = { ...this.state.newGym };
    tempGym[name] = e.target.value * 1;
    this.setState({ newGym: tempGym });
  }

  formFieldDateState = (name, e) => {
    const tempGym = { ...this.state.newGym };
    tempGym[name] = e.target.value;
    this.setState({ newGym: tempGym });
  }


  nameChange = e => this.formFieldStringState('name', e);
  phoneChange = e => this.formFieldStringState('phone', e);
  affiliationChange = e => this.formFieldStringState('affiliation', e);
  add1Change = e => this.formFieldStringState('address1', e);
  add2Change = e => this.formFieldStringState('address2', e);
  cityChange = e => this.formFieldStringState('city', e);
  stateChange = e => this.formFieldStringState('state', e);
  zipcodeChange = e => this.formFieldStringState('zipcode', e);
  latChange = e => this.formFieldNumberState('lat', e);
  lngChange = e => this.formFieldNumberState('lng', e);

  onSubmit = (newGym) => {
    console.log(newGym);
    gymRequests.createGym(newGym).then((result) => {
      console.log(result);
      this.props.history.push('/map');
    }).catch(err => console.error('error creating payments for customer', err));
  }
   
  formSubmit = (e) => {
    e.preventDefault();
    const newGym = { ...this.state.newGym };
    this.onSubmit(newGym);
    this.setState({
      newGym: defaultForm,
    });
  };


    render() {
      const { newGym } = this.state;

      return (
        <div className=" d-flex wrapFormDiv card p-5 mx-auto">
           <div>
            <Link to="/about" className="test">ABOUT</Link>
          </div>
          <div>
            <Link to="/home" className="test">HOME</Link>
          </div>    
        <div className="contact-container">
           <form className="well form-horizontal" onSubmit={this.formSubmit} action=" " method="post"  id="contact_form">
              <fieldset>
                 <legend>
                    <center>
                       <h2><b>Add Your Gym</b></h2>
                    </center>
                 </legend>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Name</label>  
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                           name="name" 
                           placeholder="Gym Name" 
                           className="form-control"  
                           type="text" 
                           onChange={this.nameChange} 
                           value={newGym.name} 
                           required 
                           />
                       </div>
                    </div>
                 </div>
                 {/* <!-- Text input--> */}
                 <div className="form-group">
                    <label className="col-md-4 control-label">Phone</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input 
                          name="phone" 
                          placeholder="1234567890" 
                          className="form-control"  
                          type="text" 
                          onChange={this.phoneChange}
                          value={newGym.phone}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Affiliation</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-phone-alt"></i></span>
                          <input 
                          name="affiliation" 
                          placeholder="Affiliation" 
                          className="form-control"  
                          type="text" 
                          onChange={this.affiliationChange}
                          value={newGym.affiliation}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Address1</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="address1" 
                          placeholder="Address 1" 
                          className="form-control"  
                          type="text" 
                          onChange={this.add1Change}
                          value={newGym.address1}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Address 2</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="Address 2" 
                          placeholder="Address 2" 
                          className="form-control"  
                          type="text" 
                          onChange={this.add2Change}
                          value={newGym.address2}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">City</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="city" 
                          placeholder="City" 
                          className="form-control"  
                          type="text" 
                          onChange={this.cityChange}
                          value={newGym.city}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">State</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="state" 
                          placeholder="State" 
                          className="form-control"  
                          type="text" 
                          onChange={this.stateChange}
                          value={newGym.state}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Zipcode </label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="zipcode" 
                          placeholder="Zipcode" 
                          className="form-control"  
                          type="text" 
                          onChange={this.zipcodeChange}
                          value={newGym.zipcode}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Lat </label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="text" 
                          placeholder="00.0000" 
                          className="form-control"  
                          type="float" 
                          onChange={this.latChange}
                          value={newGym.lat}
                          />
                       </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="col-md-4 control-label">Lng</label> 
                    <div className="col-md-8 inputGroupContainer">
                       <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input 
                          name="lat" 
                          placeholder="-00.0000" 
                          className="form-control"  
                          type="text" 
                          onChange={this.lngChange}
                          value={newGym.lng}
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
      )
    }
}

export default GymForm;