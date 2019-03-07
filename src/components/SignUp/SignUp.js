import React, { Component } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import firebase from "firebase";
import image from "./trackenLogo.svg";

import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: "",
    surname: "",
    phoneNumber: "",
    zipCode: "",
    city: "",
    address: "",
    companyName: "",
    nip: "",
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
      <div className="signUp">
        <div className="signUpForm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="topMenu">
              <Button animated circular>
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden id="hiddenButton">
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
              <img className="menuLogo" src={image} alt="tracken-logo" />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="First name"
                placeholder="First Name"
                width={8}
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
                width={8}
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Phone Number"
                placeholder="xxx-xxx-xxx"
                width={8}
                type="text"
                pattern="[0-9]{10}"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                title="Correct format: 'xxx-xxx-xxx'"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Company Name"
                placeholder="Company Name"
                width={9}
                type="text"
                name="companyName"
                value={this.state.companyName}
                onChange={this.handleChange}
              />
              <Form.Input
                label="NIP"
                placeholder="NIP number"
                width={8}
                type="text"
                pattern="[0-9]{10}"
                name="nip"
                value={this.state.nip}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Postal code"
                placeholder="xx-xxx"
                type="text"
                width={3}
                value={this.state.zipCode}
                onChange={this.handleChange}
                name="zipCode"
                pattern="[0-9]{2}-[0-9]{3}"
                title="Correct format: 'xx-xxx'"
              />
              <Form.Input
                label="City"
                type="text"
                placeholder="City"
                width={8}
                value={this.state.city}
                onChange={this.handleChange}
                name="city"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address"
                type="text"
                placeholder="Address"
                width={10}
                value={this.state.address}
                onChange={this.handleChange}
                name="address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Email"
                placeholder="Email"
                width={9}
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
                width={9}
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
                I agree to the Terms and Conditions{" "}
                <span id="requiredStar">*</span>
              </label>
            </Form.Group>
            <Button className="submit-button" size="medium" type="submit">
              Submit
            </Button>
          </Form>
        </div>
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
