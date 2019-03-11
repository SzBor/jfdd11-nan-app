import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import firebase from "firebase";
import "./ContactsBook.css";
import MainMenu from "../MainMenu";
import { withAuth } from "../../contexts/AuthContext";

class ContactsBook extends Component {
  state = {
    name: "",
    surname: "",
    postalcode: "",
    country: "",
    city: "",
    street:"",
    number:"",
    company:"",
    phone: "",
    email: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.props.authContext;
        firebase
          .database()
          .ref("users")
          .child(user.uid)
          .child('contactsBook')
          .push({
            name: this.state.name,
            surname: this.state.surname,
            postalcode: this.state.postalcode,
            country: this.state.country,
            city:this.state.city,
            street:this.state.street,
            number:this.state.number,
            company:this.state.company,
            phone:this.state.phone,
            email:this.state.email
          });
      };

  render() {
    return (
      <div className="ContactsBook">
          <MainMenu />
          <Segment color="purple">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
          <Form.Input
              label="Company name"
              placeholder="Company name"
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Name"
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
             
            />
            <Form.Input
              label="Surname"
              placeholder="Surname"
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Email"
              placeholder="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              
            />
            <Form.Input
              label="Phone"
              placeholder="Phone"
              type="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Country"
              placeholder="Coutry"
              name="country"
              type="text"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="City"
              placeholder="City"
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Postal code"
              placeholder="Postal code"
              type="text"
              name="postalcode"
              value={this.state.postalcode}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Street"
              placeholder="Street"
              type="text"
              name="street"
              value={this.state.street}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Street number"
              placeholder="Street number"
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit" onClick={this.handleSubmit}>Add Contact</Button>
        </Form>
        </Segment>
      </div>
    );
  }
}

export default withAuth(ContactsBook);
