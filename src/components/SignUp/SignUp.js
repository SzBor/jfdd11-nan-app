import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <Form>
          <Form.Group>
            <Form.Input label="First name" placeholder="First Name" width={4} />
            <Form.Input
              label="Middle Name"
              placeholder="Middle Name"
              width={4}
            />
            <Form.Input label="Last Name" placeholder="Last Name" width={6} />
          </Form.Group>
          <Form.Group>
            <Form.Input label = "Postal code" placeholder="Postal code" width={2} />
            <Form.Input label="Address" placeholder="Address" width={10} />
           
          </Form.Group>
          
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
