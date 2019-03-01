import React, { Component } from "react";
import { Form, Input, Button, Segment, Header } from "semantic-ui-react";

import "./SendParcel.css";

class SendParcel extends Component {
  state ={
    dateSend:'',
    recipientName:'',
    phone:'',
    city:'',
    postalCode:'',
    streetName:'',
    streetNumber:'',
    country:'',
    parcelWeight:'',
    parcelDepth:'',
    parcelHeight:'',
    parcelWidth:'',
    
  }
  /* addTask: parcelid => {
    firebase
      .database()
      .ref('packages')
      .push({
        title: taskTitle,
        isDone: false,
      });
  } */

  handleChange = event => {
    const id = event.target.id
    const value = event.target.value
    this.setState({
      [id]:value
      //value: event.target.value
    });
  }

handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h4">Please fill the form below to send a new package</Header>
        <Segment color='purple'>
          <Form.Field
            inline
            id="dateSend"
            control={Input}
            label="Sending date"
            placeholder="Sending date"
            value={this.state.form}
            onChange={this.handleChange}
          />
        </Segment>
        <Header as="h4">Recipient details</Header>
        <Segment color='purple'>
          <Form.Group widths="equal">
            <Form.Field
              id="recipientName"
              control={Input}
              label="Recipient name"
              placeholder="Recipient name"
            />
            <Form.Field
              id="phone"
              control={Input}
              label="Phone number"
              placeholder="Phone number"
            />
            <Form.Field
              id="city"
              control={Input}
              label="City"
              placeholder="City"
            />
            <Form.Field
              id="postalCode"
              control={Input}
              label="Postal Code"
              placeholder="Postal Code"
            />
            <Form.Field
              id="streetName"
              control={Input}
              label="Street name"
              placeholder="Street name"
            />
            <Form.Field
              id="streetNumber"
              control={Input}
              label="Street number"
              placeholder="Steet number"
            />
            <Form.Field
              id="country"
              control={Input}
              label="Country"
              placeholder="Country"
            />
          </Form.Group>
        </Segment>
        <Header as="h4">Parcel details</Header>
        <Segment color='purple'>
          <Form.Group widths="equal">
            <Form.Field
              id="parcelWeight"
              control={Input}
              label="Parcel weight"
              placeholder="Parcel weight"
            />
            <Form.Field
              id="parcelWidth"
              control={Input}
              label="Parcel width"
              placeholder="Parcel width"
            />
            <Form.Field
              id="parcelHeight"
              control={Input}
              label="Parcel height"
              placeholder="Parcel height"
            />
            <Form.Field
              id="parcelDepth"
              control={Input}
              label="Parcel depth"
              placeholder="Parcel depth"
            />
          </Form.Group>
        </Segment>
        <Segment basic>
        <Form.Field
          id="sendParcel"
          control={Button}
          content="Send parcel"
        />
        </Segment>
      </Form>
    );
  }
}

export default SendParcel;
