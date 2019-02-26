import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <Form>
          <Form.Group>
            <Form.Input label="First name" placeholder="First Name" width={6} />
            <Form.Input
              label="Middle Name"
              placeholder="Middle Name"
              width={4}
            />
            <Form.Input label="Last Name" placeholder="Last Name" width={6} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder="2 Wide" width={2} />
            <Form.Input placeholder="12 Wide" width={12} />
            <Form.Input placeholder="2 Wide" width={2} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder="8 Wide" width={8} />
            <Form.Input placeholder="6 Wide" width={6} />
            <Form.Input placeholder="2 Wide" width={2} />
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
