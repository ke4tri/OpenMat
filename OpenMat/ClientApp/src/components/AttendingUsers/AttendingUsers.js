import React from 'react';
//import { Link } from "react-router-dom";
import './AttendingUsers.css';

class AttendingUsers extends React.Component{
    state = {
   
    }

    componentWillMount() {
      
    }

    render(){
      return(
        <div>
          <div>{this.props.firstName}</div>
        </div>
      );
    }
}

export default AttendingUsers;