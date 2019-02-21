import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <h2>Main menu</h2>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/app">Default App</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
