import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import firebase from 'firebase';

import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: '',
    surname:'',
    zipCode:'',
    address:'',
    email:'',
    password:'',
    error:null,
    success:null,
  }

  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  

  





  render() {
    return (
      <div className="SignUp">
        <Form>
          <Form.Group>
            <Form.Input
              label="First name"
              placeholder="First Name"
              width={5}
              type="text"
              name="name"
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
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Postal code"
              placeholder="Postal code"
              width={2}
            />
            <Form.Input label="Address" placeholder="Address" width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Email"
              placeholder="Email"
              width={5}
              type="email"
              name="email"
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
              required
            />
          </Form.Group>

          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
