import React, { Component } from 'react';
import './HomeView.css';
import SearchBar from '../SearchBar';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class HomeView extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  
  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <div className="HomeView">
        <header className="">
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
        </header>
        <h1>Find your package</h1>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default HomeView;


