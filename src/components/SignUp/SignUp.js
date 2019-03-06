import React, { Component } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import firebase from "firebase";

import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: "",
    surname: "",
    zipCode: "",
    address: "",
    email: "",
    password: "",
    error: null,
    success: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("users")
          .child(userId)
          .set({
            name: this.state.name,
            surname: this.state.surname,
            zipCode: this.state.zipCode,
            address: this.state.address
          });
        this.setState({ error: null, success: "Account created" });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ error: error, success: null }));
  };

  render() {
    return (
      <div className="SignUp">
       <Button animated circular>
      <Button.Content visible>Home</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
        <Form className="signUpForm" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="First name"
              placeholder="First Name"
              width={5}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              width={5}
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Postal code"
              placeholder="xx-xxx"
              type="text"
              width={2}
              value={this.state.zipCode}
              onChange={this.handleChange}
              name="zipCode"
              pattern="[0-9]{2}-[0-9]{3}"
              title="Correct format: 'xx-xxx'"
            />
            <Form.Input
              label="Address"
              type="text"
              placeholder="Address"
              width={6}
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Email"
              placeholder="Email"
              width={5}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Password"
              placeholder="Password"
              width={4}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <label id="termsnConditionsLabel">
              <input
                id="termsnConditions"
                type="checkbox"
                label="I agree to the Terms and Conditions"
                required
              />
              I agree to the Terms and Conditions < span id="requiredStar">*</span>
            </label>
          </Form.Group>
          <Button className="submit-button" size="medium" type="submit">
            Submit
          </Button>
        </Form>
        {this.state.error && (
          <p style={{ color: "red" }}>{this.state.error.message}</p>
        )}
        {this.state.success && (
          <p style={{ color: "green" }}>{this.state.success}</p>
        )}
      </div>
    );
  }
}

export default SignUp;
