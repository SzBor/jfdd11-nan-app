import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import firebase from "firebase";
import "./ContactsBook.css";
import { withAuth } from "../../contexts/AuthContext";

class ContactsBook extends Component {

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
    
    const {
      userData: { contactsBook }
    } = this.props.authContext;
    return (
      <div className="ContactsBook">
 
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
