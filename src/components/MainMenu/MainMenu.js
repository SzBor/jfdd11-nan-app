import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import image from "./trackenLogo.svg"

import "./mainMenu.css";

class MainMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={image}  alt='tracken-logo'/>
        </Menu.Item>

        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
          exact to="/"
          as={NavLink}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="app"
          active={activeItem === "app"}
          onClick={this.handleItemClick}
          to="/App"
          as={NavLink}
        >
          App
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
          to="/parcel"
          as={NavLink}
        >
          Track Panel
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
