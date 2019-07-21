import React from 'react';

import './GymForm.css';




class GymForm extends React.Component {
 
   
    render() {
  
      return (
        <div className=" d-flex wrapFormDiv card p-5 mx-auto">
        <form className="form-inline">

         <div>
         <label className="sr-only" for="inlineFormInputName2">Name</label>
         <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
         </div>
         
          
          <div className="input-group mb-2 mr-sm-2">
          <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
          </div>
         
         <div>
           <button type="submit" className="btn btn-primary mb-2">Submit</button>
         </div>
        
        </form>
        </div>
      )
    }
}

export default GymForm;