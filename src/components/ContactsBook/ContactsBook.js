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
    street: "",
    number: "",
    company: "",
    phone: "",
    email: "",
    showAddContact: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  toggleAddContact = () => {
    this.setState({ showAddContact: !this.state.showAddContact });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.props.authContext;
    firebase
      .database()
      .ref("users")
      .child(user.uid)
      .child("contactsBook")
      .push({
        name: this.state.name,
        surname: this.state.surname,
        postalcode: this.state.postalcode,
        country: this.state.country,
        city: this.state.city,
        street: this.state.street,
        number: this.state.number,
        company_name: this.state.company,
        phone: this.state.phone,
        email: this.state.email
      });
      this.toggleAddContact();
  };
  deleteContact =  event => {
    const contactId = event.target.id
    const { user } = this.props.authContext;
      firebase
        .database()
        .ref('users')
        .child(user.uid)
        .child("contactsBook")
        .child(contactId)
        .set(null)
  }

  render() {
    const { showAddContact } = this.state;
    const {
      userData: { contactsBook }
    } = this.props.authContext;
    return (
      <div className="ContactsBook">
        <MainMenu />
        <br />
        <div>
          <Button onClick={() => this.toggleAddContact(showAddContact)}>
            {showAddContact ? "Cancel" : "Add new contact"}
          </Button>
        </div>
        {showAddContact && 
        (<Segment color="purple">
          <Form>
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
          </Form>
          <Button type="submit" onClick={this.handleSubmit}>
              Add Contact
            </Button>
        </Segment>)
        }
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Company name</th>
              <th>Name</th>
              <th>Surname</th>
              <th>City</th>
              <th>Postal code</th>
              <th>Street</th>
              <th>Number</th>
              <th>Phone</th>
              <th>Email</th>
              <th>NIP</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {contactsBook.map(contact => (
              <tr key={contact.id}>
                <td>{contact.company_name}</td>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.city}</td>
                <td>{contact.postalcode}</td>
                <td>{contact.street}</td>
                <td>{contact.number}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.nip}</td>
                <td><Button id={contact.id} onClick={this.deleteContact}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withAuth(ContactsBook);
