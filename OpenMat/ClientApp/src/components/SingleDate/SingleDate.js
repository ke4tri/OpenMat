import React from 'react';
import './SingleDate.css';

class SingleDate extends React.Component{
    
    render(){
        return(
         
              <div className="replace ">
              <div>{this.props.date}</div>
                {/* <p>{this.props.productName}<span className="span">|</span>  </p>   */}
                {/* {this.props.productName} <span> Qty : </span>
                <span className="badge badge-primary badge-pill">{this.props.quantity} </span> */}
              </div>
        
        );
    }
}

export default SingleDate;