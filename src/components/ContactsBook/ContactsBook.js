import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import firebase from "firebase";
import "./ContactsBook.css";
import MainMenu from "../MainMenu";

class ContactsBook extends Component {
  state = {
    name: "",
    surname: "",
    zipCode: "",
    address: "",
    city: "",
    street:"",
    streetNumber:"",
    aptNumber:"",
    phone: "",
    email: "",
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
      .signInWithEmailAndPassword()
      .then(data => {
        const ContactId = firebase.auth().currentContact.uid;
        firebase
          .database()
          .ref("contactsBook")
          .child(ContactId)
          .set({
            name: this.state.name,
            surname: this.state.surname,
            zipCode: this.state.zipCode,
            address: this.state.address,
            city:this.state.city,
            street:this.state.street,
            streetNumber:this.state.streetNumber,
            aptNumber:this.state.aptNumber,
            phone:this.state.phone,
            email:this.state.email
          });
        this.props.history.push("/ContactsBook");
      })
      .catch(error => this.setState({ error: error, success: null }));
  };

  render() {
    return (
      <div className="ContactsBook">
          <MainMenu />

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
             
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              width={5}
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
             
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
              
            />
            <Form.Input
              label="Phone"
              placeholder="Phone"
              
              width={5}
              type="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address"
              placeholder="Coutry"
              width={3}
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <Form.Input
              label="City"
              placeholder="City"
              width={3}
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <Form.Input
              label="ZIP code"
              placeholder="ZIP code"
              width={3}
              type="text"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Street"
              placeholder="Street"
              width={3}
              type="text"
              name="street"
              value={this.state.street}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Street number"
              placeholder="Street number"
              width={3}
              type="text"
              name="streetNumber"
              value={this.state.streetNumber}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Apt. number"
              placeholder="Apt. number"
              width={3}
              type="text"
              name="aptNumber"
              value={this.state.aptNumber}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Add Contact</Button>
        </Form>
       
      </div>
    );
  }
}

export default ContactsBook;
