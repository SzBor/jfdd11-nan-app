import React, { Component } from 'react';
import './Apps.css';
import Form from '../Chat/Form.js';


import firebase from 'firebase';
import MainMenu from '../MainMenu';

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
      <div style={{ width: "100%", background: "#eee"}}>
          <MainMenu />
        </div>
        <div>
        <h1>Welocome to Tracken Chat</h1>
         
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default Apps;