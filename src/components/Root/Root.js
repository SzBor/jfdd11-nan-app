import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';

import Parcel from '../Parcel';
import HomeView from '../HomeView';

import Dashboard from '../Dashboard';

class Root extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex', width: '100%' }}>
          <div
            style={{
              flexGrow: 1,
              minHeight: '100px',
              padding: 20,
              boxSizing: 'border-box',
            }}
          >
            <Route path="/app" component={App} />
            <Route exact path="" component={HomeView} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/:parcelId" component={Parcel} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default Root;