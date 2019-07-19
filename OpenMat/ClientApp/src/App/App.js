import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from '../components/Home/Home';
import MapComp from '../components/Map/Map';
import About from '../components/About/About';
import './App.css';



class App extends React.Component {
  displayName = App.name

  render() {
    return (
      <Router>
      <div className="appCss">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={MapComp} />
      </div>
    </Router>
    );
  }
}

export default App;