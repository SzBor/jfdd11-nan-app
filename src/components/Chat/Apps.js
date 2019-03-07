import React, { Component } from "react";
import "./Apps.css";
import Form from "../Chat/Form.js";

import firebase from "firebase";
import MainMenu from "../MainMenu";

class Apps extends Component {
  state = {
    user: null,
    adminIds: null,
    users: null,
    currentChatId: null
  };

  readAdmins = snapshot => {
    this.setState({
      adminIds: Object.keys(snapshot.val() || {})
    });
  };

  readUsers = snapshot => {
    this.setState({
      users: snapshot.val()
    });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
    firebase
      .database()
      .ref("admins")
      .on("value", this.readAdmins);
    firebase
      .database()
      .ref("users")
      .on("value", this.readUsers);
  }

  componentWillUnmount() {
    firebase
      .database()
      .ref("admins")
      .off("value", this.readAdmins);
    firebase
      .database()
      .ref("users")
      .off("value", this.readusers);
  }

  startChar = chatBuddyId => {
    const myId = this.state.user && this.state.user.uid;

    if (myId === null || chatBuddyId === null) {
      return;
    }

    const chatId = firebase
      .database()
      .ref("chats")
      .push().key;

    const updates = {
      [`/chats/${chatId}`]: {
        firstUserId: myId,
        secondUserId: chatBuddyId
      },
      [`/users/${myId}/chatIds/${chatId}`]: true,
      [`/users/${chatBuddyId}/chatIds/${chatId}`]: true,
    }

    firebase
      .database()
      .ref().update(updates)

    this.setState({
      currentChatId: chatId
    });
  };

  handleSignIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .then(data => {
        this.setState({ error: null, success: "Sign in successful" });
      })
      .catch(error => this.setState({ error: error, success: null }));
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    const users =
      this.state.adminIds &&
      this.state.adminIds
        .map(
          userId =>
            this.state.users &&
            this.state.users[userId] && {
              id: userId,
              ...this.state.users[userId]
            }
        )
        .filter(user => (user === undefined || user === null ? false : true));

    return (
      <div className="app">
        <div
          className="mainMenuChat"
          style={{ width: "100%", background: "#eee" }}
        >
          <MainMenu />
        </div>
        <div>
          <h1>Welocome to Tracken Chat</h1>
          <ul>
            {users &&
              users.map(user => (
                <li key={user.id}>
                  {user.name}{" "}
                  <button onClick={() => this.startChar(user.id)}>Call</button>
                </li>
              ))}
          </ul>
          {this.state.currentChatId}

          {this.state.user && this.state.users && Object.keys(this.state.users[this.state.user.uid].chatIds || {}).map(
            id => <button key={id} onClick={() => this.setState({ currentChatId: id })}>{id}</button>
          )}
        </div>
        <div className="app__list">
          {this.state.currentChatId && (
            <Form user={this.state.user} users={this.state.users} key={this.state.currentChatId} chatId={this.state.currentChatId} />
          )}
        </div>
      </div>
    );
  }
}
export default Apps;
