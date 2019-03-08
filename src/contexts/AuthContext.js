import React, { Component } from "react";
import firebase from "firebase";

// The argument passed to `createContext` is being used only
// if given context provider is not available within VDOM
// tree above the Consumer.
export const AuthContext = React.createContext({ user: null });
const { Provider, Consumer } = AuthContext;

export default class AuthContextProvider extends Component {
  state = {
    user: null,
    userData: {
      name: '',
      surname: ''
    },
    signOut: () => firebase.auth().signOut(),
    signIn: (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password)
  };

  userDbRef = null;

  readUserData = snapshot => {
    const person = snapshot.val();

    if (person === null) {
      return;
    }

    this.setState({
      userData: {
        name: person.name,
        surname: person.surname
      }
    });
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      if (user !== null) {
        this.userDbRef = firebase.database().ref(`users/${user.uid}`);

        this.userDbRef.on("value", this.readUserData);
      } else {
        this.userDbRef.off("value", this.readUserData);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

// HOC - Higher Order Component
export const withAuth = Component => props => (
  <Consumer>{value => <Component {...props} authContext={value} />}</Consumer>
);
