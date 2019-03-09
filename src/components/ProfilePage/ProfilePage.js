import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import MainMenu from "../MainMenu";

import "./ProfilePage.css";
class ProfilePage extends Component {
  state = {};

  handleClick = () => this.setState({ 
    active: !this.state.active 
  });

  render() {
    const { active } = this.state;
    return (
      <div className="ProfilePage">
        <MainMenu />
        <br />
        {active ? 
        (<Button toggle active={active} onClick={this.handleClick}>
        Save
        </Button>) :
        (<Button toggle active={active} onClick={this.handleClick}>
          Edit
        </Button>)
        }
        {active ? 
        (<Segment color="purple">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="company_name"
                label="Company name"
                placeholder="Company name"
              />
              <Form.Input
                fluid
                id="first_name"
                label="First name"
                placeholder="First name"
              />
              <Form.Input
                fluid
                id="last_name"
                label="Last name"
                placeholder="Last name"
              />
              <Form.Input fluid id="nip" label="NIP" placeholder="NIP" />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input fluid id="city" label="City" placeholder="City" />
              <Form.Input
                fluid
                id="postalcode"
                label="Postal Code"
                placeholder="Postal Code"
              />
              <Form.Input
                fluid
                id="street"
                label="Street"
                placeholder="Street"
              />
              <Form.Input
                fluid
                id="number"
                label="Number"
                placeholder="Number"
              />
              <Form.Input fluid id="phone" label="Phone" placeholder="Phone" />
            </Form.Group>
          </Form>
        </Segment>)
:
        (<Segment color="purple">
          <Form>
            <Form.Group widths="equal">
              <div className="field">
                <label>Company name</label>
                <div className="formBox">text</div>
              </div>

              <div className="field">
                <label>First name</label>
                <div className="formBox">text</div>
              </div>
              <div className="field">
                <label>Last name</label>
                <div className="formBox">text</div>
              </div>
              <div className="field">
                <label>NIP</label>
                <div className="formBox">text</div>
              </div>
            </Form.Group>
            <Form.Group widths="equal">
              <div className="field">
                <label>City</label>
                <div className="formBox">text</div>
              </div>
              <div className="field">
                <label>Postal code</label>
                <div className="formBox">text</div>
              </div>
              <div className="field">
                <label>Street</label>
                <div className="formBox">text</div>
              </div>
              <div className="field">
                <label>Number</label>
                <div className="formBox">text</div>
              </div>
              <div className="field">
                <label>Phone</label>
                <div className="formBox">text</div>
              </div>
            </Form.Group>
          </Form>
        </Segment>)}
      </div>
    );
  }
}

export default ProfilePage;
