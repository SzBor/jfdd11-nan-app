import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import image from "./trackenLogo.svg";
import firebase from "firebase";
import "./MainMenu.css";

class MainMenu extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { user } = this.state;
    return (
      <Menu stackable>
        <Menu.Item>
          <img src={image} alt="tracken-logo" />
        </Menu.Item>
        

        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
          exact
          to="/"
          as={NavLink}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          onClick={this.handleItemClick}
          to="/dashboard"
          as={NavLink}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          name="track-panel"
          active={activeItem === "track-panel"}
          onClick={this.handleItemClick}
          to="/dashboard/:parcelId"
          as={NavLink}
        >
          Track Panel
        </Menu.Item>
        <Menu.Item>
          {user && (
            <p>
              <span id="loggenInAs">Logged in as:</span>
              <span id="loggedInUser">{user.email} </span>

              <Button id="signOutButton" negative size='mini' onClick={() => firebase.auth().signOut()}>
                Sign out
              </Button>
            </p>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
