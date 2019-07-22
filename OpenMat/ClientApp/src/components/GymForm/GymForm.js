import React from 'react';


import './GymForm.css';




class GymForm extends React.Component {
 
   
    render() {
  
      return (
        <div className=" d-flex wrapFormDiv card p-5 mx-auto">
       <div class="contact-container">

<form class="well form-horizontal" action=" " method="post"  id="contact_form">
<fieldset>

<legend><center><h2><b>Contact Information</b></h2></center></legend>

<div class="form-group"> 
<label class="col-md-4 control-label">Anonymity</label>
    <div class="col-md-8 selectContainer">
    <div class="input-group">
        <span class="anon input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="department" class="form-control selectpicker">
    <option value="">Submit as anonymous?</option>
    <option>Yes</option>
    <option>No</option>
    </select>
</div>
</div>
</div>

<div class="form-group">
<label class="col-md-4 control-label">First Name</label>  
<div class="col-md-8 inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="first_name" placeholder="First Name" class="form-control"  type="text" />
    </div>
</div>
</div>

{/* <!-- Text input--> */}

<div class="form-group">
<label class="col-md-4 control-label" >Last Name</label> 
    <div class="col-md-8 inputGroupContainer">
    <div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input name="last_name" placeholder="Last Name" class="form-control"  type="text" />
    </div>
</div>
</div>    

<div class="form-group">
<label class="col-md-4 control-label">City</label>  
<div class="col-md-8 inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="user_name" placeholder="City" class="form-control"  type="text" />
    </div>
</div>
</div>

<div class="form-group">
<label class="col-md-4 control-label">State</label>  
<div class="col-md-8 inputGroupContainer">
<div class="input-group">
<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
<input  name="user_name" placeholder="State" class="form-control"  type="text" />
    </div>
</div>
</div>

<div class="form-group">
<label class="col-md-5 control-label"></label>
<div class="col-md-4"><button type="submit" class="btn btn-warning" >Submit</button>
</div>
</div>
</fieldset>
</form>
</div>
        </div>
      )
    }
}

export default GymForm;