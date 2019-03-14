import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import firebase from "firebase";
import "./ContactsBook.css";
import { withAuth } from "../../contexts/AuthContext";

class ContactsBook extends Component {
  state = {
    searchPhrase: "",
    pagination: 0,
  }
  handleChange = event => {
    this.setState({
      searchPhrase: event.target.value
    });
  };
  handlePaginationChange = event => {
    const paginationPage = event.target.value;
    this.setState({
      pagination: paginationPage * (this.props.perPage || 10)
    });
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
    const { pagination, searchPhrase } = this.state;
    const {
      userData: { contactsBook }
    } = this.props.authContext;
    const recordsOnPage = this.props.perPage || 10;
    const shearchedContactBook = contactsBook.map(contact => ({
      ...contact,
      searchData: (
        contact.company_name +
        contact.name +
        contact.surname.street
      ).toLowerCase()
    }))
    .filter(contact => contact.searchData.includes(searchPhrase.toLowerCase()))
    return (
      <div className="ContactsBook">
        <div className="ui input">
              <input
                placeholder="Search..."
                value={searchPhrase}
                onChange={this.handleChange}
              />
            </div>
        <table className="ui celled table contacts_table">
          <thead className="contacts_table">
            <tr className="contacts_table">
              <th className="contacts_table">Company name</th>
              <th className="contacts_table">Name</th>
              <th className="contacts_table">Surname</th>
              <th className="contacts_table">City</th>
              <th className="contacts_table">Postal code</th>
              <th className="contacts_table">Street</th>
              <th className="contacts_table">Number</th>
              <th className="contacts_table">Phone</th>
              <th className="contacts_table">Email</th>
              <th className="contacts_table">NIP</th>
              <th />
            </tr>
          </thead>
          <tbody className="contacts_table">
            {shearchedContactBook.map(contact => (
              <tr key={contact.id} className="contacts_table">
                <td className="contacts_table">{contact.company_name}</td>
                <td className="contacts_table">{contact.name}</td>
                <td className="contacts_table">{contact.surname}</td>
                <td className="contacts_table">{contact.city}</td>
                <td className="contacts_table">{contact.postalcode}</td>
                <td className="contacts_table">{contact.street}</td>
                <td className="contacts_table">{contact.number}</td>
                <td className="contacts_table">{contact.phone}</td>
                <td className="contacts_table">{contact.email}</td>
                <td className="contacts_table">{contact.nip}</td>
                <td className="td_buttons contacts_table"><Button className={this.props.additionalClass || "hideCopy"} onClick={() => this.props.onCopyContact(contact)} circular color='facebook' icon='copy' />
                <Button id={contact.id} onClick={this.deleteContact} circular color='red' icon='delete' />
                </td>
              </tr>
            )).slice(pagination, pagination + recordsOnPage)}
          </tbody>
        </table>
        <div className="pagination">
            {Array.from({
              length: Math.ceil(shearchedContactBook.length / recordsOnPage)
            }).map((button, index) => (
              <button
                className="ui button"
                key={index}
                value={index}
                onClick={this.handlePaginationChange}
              >
                {index + 1}
              </button>
            ))}
          </div>
      </div>
    );
  }
}

export default withAuth(ContactsBook);
