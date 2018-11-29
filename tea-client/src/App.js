import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/landing/landing';
import Menu from './components/menu/menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Landing} />
            <Route path="/menu/" component={Menu} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
