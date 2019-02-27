import React, { Component } from "react";
import "./HomeView.css";
import SearchBar from "../SearchBar";
import { Button, Popup } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LogIn from "../LogIn";

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
        <header className="homeView-buttons">
          <Popup
            content={<LogIn />}
            trigger={<Button  inverted>Log in</Button>}
            hideOnScroll={false}
            on={"click"}
            position= {"top center"}
            basic
            style={{ position:"fixed",left:"20%", width: "80%"}}
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
        <div className="homeView-search">
          <h1>Find your package</h1>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default HomeView;
