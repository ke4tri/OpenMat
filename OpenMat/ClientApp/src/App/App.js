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
import { Home } from '../components/Home/Home';
import MapComp from '../components/Map/MapComp';
import About from '../components/About/About';
import GymForm from '../components/GymForm/GymForm';
import UserForm from '../components/UserForm/UserForm';
import OpenMatts from '../components/OpenMatts/OpenMatts'
import './App.css';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  let routeChecker = props => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

//NO PRIVATEROUTES
// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   let routeChecker = props => (authed === true
//     ? (<Component {...props} {...rest} />)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };

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

  render() {
    const { authed, pendingUser, customerObject } = this.state;

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              {/* <PublicRoute path='/auth' component={Auth} authed={authed} /> */}
              <PublicRoute path='/' exact component={Home} authed={authed} />
              <PublicRoute path='/home' component={Home} logoutClickEvent={this.logoutClickEvent} authed={authed} />
              <PublicRoute path='/map' component={MapComp} authed={authed}  />
              {/* <PublicRoute path='/map' component={MapApp} authed={authed}  /> */}
              <PublicRoute path='/about' component={About} authed={authed}  />
              <PublicRoute path='/gymform' component={GymForm} authed={authed}  />
              <PublicRoute path='/userform' component={UserForm} authed={authed} />
              <PublicRoute path='/openmatts' component={OpenMatts} authed={authed} />

            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;