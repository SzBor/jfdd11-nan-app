import React, { Component } from 'react';
import './Apps.css';
import Form from '../Chat/Form.js';
import { Button, Popup } from "semantic-ui-react";
import LogIn from "../LogIn";
import firebase from 'firebase';

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    firebase.auth().signInWithEmailAndPassword()
    .then(data => {
      
      this.setState({ error: null, success: 'Sign in successful' })})
    .catch(error => this.setState({ error: error, success: null }));
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
        
          { !this.state.user ? (
            <Popup
            content={<LogIn />}
            trigger={<Button  inverted>Log in</Button>}
            hideOnScroll={false}
            on={"click"}
            position= {"top center"}
            basic
            style={{ position:"fixed",right:"4%", width: "80%"}}
          />
          ) : (
            <button
              className="app__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          )}
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default Apps;