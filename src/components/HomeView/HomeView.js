import React, { Component } from "react";
import "./HomeView.css";
import SearchBar from "../SearchBar";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class CustomButton extends Component {
  render() {
    return <NavLink {...this.props} />
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
          <Button as="a" inverted>
            Log in
          </Button>
          <Button to="/sign-up" as={CustomButton} inverted style={{ marginLeft: "0.5em" }}>
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
