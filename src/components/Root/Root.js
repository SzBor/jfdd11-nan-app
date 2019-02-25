import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';
import HomeView from '../HomeView';
import TrackPanel from '../TrackPanel';
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
            <Route path="/home" component={HomeView} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/trackpanel" component={TrackPanel} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Root;