import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import MainMenu from "../MainMenu";
import { withAuth } from "../../contexts/AuthContext";

import "./ProfilePage.css";

class ProfilePage extends Component {
  state = {
    active: false,
    company_name: "",
    name: "",
    surname: "",
    nip: "",
    phone: "",
    city: "",
    postalcode: "",
    street: "",
    number: ""
  };
  
  handleClick = () =>
    this.setState({
      active: !this.state.active
    });

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      [id]: value
    });
  };
  handleSave = () => {
    this.handleClick();
  }

  render() {
    const { userData } = this.props.authContext;
    const {
      active,
      company_name,
      name,
      surname,
      nip,
      phone,
      city,
      postalcode,
      street,
      number
    } = this.state;
    return (
      <div className="ProfilePage">
        <MainMenu />
        <br />
        {active ? (
          <Button toggle active={active} onClick={this.handleSave}>
            Save
          </Button>
        ) : (
          <Button toggle active={active} onClick={this.handleClick}>
            Edit
          </Button>
        )}
        {active ? (
          <Segment color="purple">
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  id="company_name"
                  label="Company name"
                  placeholder="Company name"
                  value={company_name ? company_name : userData.company_name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  id="name"
                  label="First name"
                  placeholder="First name"
                  value={name ? name : userData.name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  id="surname"
                  label="Last name"
                  placeholder="Last name"
                  value={surname ? surname : userData.surname}
                />
                <Form.Input
                  fluid
                  id="nip"
                  label="NIP"
                  placeholder="NIP"
                  value={nip ? nip : userData.nip}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  id="city"
                  label="City"
                  placeholder="City"
                  value={city ? city : userData.city}
                />
                <Form.Input
                  fluid
                  id="postalcode"
                  label="Postal Code"
                  placeholder="Postal Code"
                  value={postalcode ? postalcode : userData.postalcode}
                />
                <Form.Input
                  fluid
                  id="street"
                  label="Street"
                  placeholder="Street"
                  value={street ? street : userData.street}
                />
                <Form.Input
                  fluid
                  id="number"
                  label="Number"
                  placeholder="Number"
                  value={number ? number : userData.number}
                />
                <Form.Input
                  fluid
                  id="phone"
                  label="Phone"
                  placeholder="Phone"
                  value={phone ? phone : userData.phone}
                />
              </Form.Group>
            </Form>
          </Segment>
        ) : (
          <Segment color="purple">
            <Form>
              <Form.Group widths="equal">
                <div className="field">
                  <label>Company name</label>
                  <div className="formBox">{userData.company_name}</div>
                </div>

                <div className="field">
                  <label>First name</label>
                  <div className="formBox">{userData.name}</div>
                </div>
                <div className="field">
                  <label>Last name</label>
                  <div className="formBox">{userData.surname}</div>
                </div>
                <div className="field">
                  <label>NIP</label>
                  <div className="formBox">{userData.nip}</div>
                </div>
              </Form.Group>
              <Form.Group widths="equal">
                <div className="field">
                  <label>City</label>
                  <div className="formBox">{userData.city}</div>
                </div>
                <div className="field">
                  <label>Postal Code</label>
                  <div className="formBox">{userData.postalcode}</div>
                </div>
                <div className="field">
                  <label>Street</label>
                  <div className="formBox">{userData.street}</div>
                </div>
                <div className="field">
                  <label>Number</label>
                  <div className="formBox">{userData.number}</div>
                </div>
                <div className="field">
                  <label>Phone</label>
                  <div className="formBox">{userData.phone} </div>
                </div>
              </Form.Group>
            </Form>
          </Segment>
        )}
      </div>
    );
  }
}

export default withAuth(ProfilePage);
