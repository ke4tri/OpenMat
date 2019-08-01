import React from 'react';
import './AttendingUsers.css';

class AttendingUsers extends React.Component{
    state = {
    }
    
    render(){
      return(
        <React.Fragment>
          <tr>
              <th scope="col"></th>
              <td>{this.props.firstName}</td>
              <td>{this.props.lastName}</td>
              <td>{this.props.rank}</td>
              <td>{this.props.affiliation}</td>
          </tr>
        </React.Fragment>
      );
    }
}

export default AttendingUsers;