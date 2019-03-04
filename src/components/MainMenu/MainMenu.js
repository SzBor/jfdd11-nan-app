import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import image from "./trackenLogo.svg";
import firebase from "firebase";
import "./MainMenu.css";
import Auth from "../Auth/Auth";

class MainMenu extends Component {
  state = {
    user: null,
    isOpen: false
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
        <Auth>
{/*        <Menu.Item
          name="contacts-book"
          active={activeItem === "contacts-book"}
          onClick={this.handleItemClick}
          to="/contacts-book"
          as={NavLink}
        >
          Contacts Book
        </Menu.Item>
        
           <Menu.Item
            name="chat"
            active={activeItem === "chat"}
            onClick={this.handleItemClick}
            to="/chat"
            as={NavLink}
          >
            Chat
          </Menu.Item> */}
       

        
          <Menu.Item>
            {user && (
              <p>
                <span id="loggenInAs">Logged in as:</span>
                <span id="loggedInUser">{user.email} </span>

                <Button
                  id="signOutButton"
                  negative
                  size="mini"
                  onClick={() =>
                    firebase
                      .auth()
                      .signOut()
                      .then(() => this.props.history.push("/"))
                  }
                >
                  Sign out
                </Button>
              </p>
            )}
          </Menu.Item>
        </Auth>
      </Menu>
    );
  }
}

export default withRouter(MainMenu);
