import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./LogIn.css";

class LogIn extends Component {
  state = {};

  render() {
    return (
      <div>
        <Form unstackable>
          <Form.Group widths={2}>
            <Form.Input label="Email" placeholder="email" />
            <Form.Input label="Password" placeholder="password" />
          </Form.Group>
          <Button type="login">Log In</Button>
        </Form>
      </div>
    );
  }
}
export default LogIn;
