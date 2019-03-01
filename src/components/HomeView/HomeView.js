import React, { Component } from "react";

import SearchBar from "../SearchBar";
import { Button, Popup } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LogIn from "../LogIn";
import Auth from "../Auth/Auth";
import { withAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
import image from "../MainMenu/trackenLogo.svg";

import "./HomeView.css";

class CustomButton extends Component {
  render() {
    return <NavLink {...this.props} />;
  }
}

class HomeView extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    return (
      <div className="HomeView">
       
        <Auth
          cover={() => (
            <header className="homeView-buttons">
         
              <Popup
                content={<LogIn />}
                trigger={<Button inverted>Log in</Button>}
                hideOnScroll={false}
                on={"click"}
                position={"top center"}
                basic
                style={{ position: "fixed", left: "20%", width: "80%" }}
              />

              <Button
                to="/sign-up"
                as={CustomButton}
                inverted
                style={{ marginLeft: "0.5em" }}
              >
                Sign Up
              </Button>
            </header>
          )}
        >
          <header className="homeView-buttons">
            <Button to="/dashboard" as={CustomButton} inverted>
              Dashboard
            </Button>
            <Button
              onClick={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(() => this.props.history.push("/"))
              }
            >
              Sign out
            </Button>
          </header>
        </Auth>
        <div>
       <div className="tracken-logo">
       <img src={image} alt="tracken-logo" />
       <p>TRACKEN</p>
       </div>
          <div className="homeView-search">
            <h2>Find your package</h2>
            <SearchBar />
          </div>
         
        </div>
        <div className="homeView-footer">
            Footer
            <div>
              Contact us
            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(HomeView);
