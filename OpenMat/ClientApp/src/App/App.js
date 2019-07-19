import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
// import customerRequests from '../helpers/data/customerRequests';
// import MyNavbar from '../components/MyNavbar/MyNavbar';
import { Home } from '../components/Home/Home';
import MapComp from '../components/Map/MapComp';
import About from '../components/About/About';
import './App.css';



const PublicRoute = ({ component: Component, authed, ...rest }) => {
  let routeChecker = props => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  let routeChecker = props => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
    customerObject: {},
  }

  componentDidMount() {
    connection();

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
        this.getCurrentCustomer();
        authRequests.getCurrentUserJwt();
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    authRequests.logoutUser();
    this.setState({ authed: false });
  };

  // getCurrentCustomer = () => {
  //   const customerFromFb = authRequests.getCurrentUser();
  //   const customerFbId = customerFromFb.uid;
  //   customerRequests.getSingleCustomer(customerFbId).then((customer) => {
  //     if (customer === undefined) {
  //       this.setState({
  //         customerObject: customerFromFb,
  //       })
  //     } else {
  //       this.setState({
  //         customerObject: customer,
  //       });
  //     }
  //   });
  // }


  render() {
    const { authed, pendingUser, customerObject } = this.state;

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            {/* <MyNavbar authed={authed} logoutClickEvent={this.logoutClickEvent}  /> */}
            <Switch>
              {/* <PublicRoute path='/auth' component={Auth} authed={authed} /> */}
              <PublicRoute path='/' exact component={Home} authed={authed} />
              <PublicRoute path='/home' component={Home} logoutClickEvent={this.logoutClickEvent} authed={authed} />
              <PublicRoute path='/map' component={MapComp} authed={authed}  />
              <PublicRoute path='/about' component={About} authed={authed}  />

              {/* <PrivateRoute path='/profile' component={CustomerProfile} authed={authed} logoutClickEvent={this.logoutClickEvent} customerObject={customerObject} updateCustomer={this.getCurrentCustomer} />
              <PrivateRoute path='/payments' component={Payment} authed={authed} customerObject={customerObject} updateCustomer={this.getCurrentCustomer} />
              <PrivateRoute path='/:orderId' component={OrderDetailsPage} authed={authed} logoutClickEvent={this.logoutClickEvent} /> */}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Home } from '../components/Home/Home';
// import MapComp from '../components/Map/Map';
// import About from '../components/About/About';
// import './App.css';



// class App extends React.Component {
//   displayName = App.name

//   render() {
//     return (
//       <Router>
//       <div className="appCss">
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/map" component={MapComp} />
//       </div>
//     </Router>
//     );
//   }
// }

// export default App;