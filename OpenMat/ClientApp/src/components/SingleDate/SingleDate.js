import React from 'react';
import { Link } from "react-router-dom";
import './SingleDate.css';

class SingleDate extends React.Component{
    state = {
      combinedState:[]
    }

    propsToState = () => {
      // const { arr } = this.state.combinedState;
      let tempArr = [];
      tempArr.push(this.props.date);
      tempArr.push(this.props.gymId);
      tempArr.push(this.props.openMatId);
      this.setState({combinedState:tempArr});
    }

    componentWillMount() {
      this.propsToState();
    }

    render(){
      return(
        <div className="replace ">
          <div>{this.props.date}</div>
          <div>

            {/* <Link to="/userform" render={(props) => <UserForm {...props} title={`Props through render`} />}></Link> */}

            <Link to={{ pathname: '/userform',state: { combinedProps: this.state.combinedState }}}>Join This Open Mat</Link>
          </div>
        </div>
       
      );
    }
}

export default SingleDate;