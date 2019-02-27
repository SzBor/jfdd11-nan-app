import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./LogIn.css";

class LogIn extends Component {
  state = {};

  render() {
    return (
      <div className="LogIn">
        <Form unstackable>
          <Form.Group widths={1}>
            <Form.Input type="email" label="Email" placeholder="email" />
            <Form.Input type="password" label="Password" placeholder="password" />
          </Form.Group>
          <Button type="signin">Log In</Button>
        </Form>
      </div>
    );
  }
}
export default LogIn;
