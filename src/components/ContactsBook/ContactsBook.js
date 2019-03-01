import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import firebase from "firebase";

import "./ContactsBook.css";


class ContactsBook extends Component {
  state = {
    name: "",
    surname: "",
    zipCode: "",
    address: "",
    phone:"",
    email: "",
    error: null,
    success: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

        


  render() {
    return (
      <div className="ContactsBook">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Name"
              placeholder="Name"
              width={5}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
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
              label="Email"
              placeholder="Email"
              width={5}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
             <Form.Input
              label="Phone"
              placeholder="Phone"
              width={5}
              type="text"
              name="phone"
              value={this.state.surname}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
          <Form.Input
              label="Address"
              placeholder="Coutry"
              width={3}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
            <Form.Input
              label="City"
              placeholder="City"
              width={3}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
             <Form.Input
              label="ZIP code"
              placeholder="ZIP code"
              width={3}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
            
          </Form.Group>
          <Form.Group>
          <Form.Input
              label="Street"
              placeholder="Street"
              width={3}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Street number"
              placeholder="Street number"
              width={3}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Apt. number"
              placeholder="Apt. number"
              width={3}
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
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

export default ContactsBook;