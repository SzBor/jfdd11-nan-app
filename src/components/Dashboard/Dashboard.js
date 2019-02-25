import React, { Component } from "react";
import MainMenu from '../MainMenu';
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    packages: [{
        id: 0,
        status: "delivered",
        type: "package",
        weight: 10,
        width: 20,
        height: 20,
        depth: 20,
        clientId: "12",
        deliveryAddress: {
          recipient: { company: "", name: "Wito", surname: "Mackiewicz" },
          city: "Gdansk",
          code: "80-120",
          street: "Hallera",
          number: "12c"
        }
      }]
  };
  render() {
    return ( 
      <div className="Dashboard">
      <div style={{ width: '100%', background: '#eee' }}>
            <MainMenu />
          </div>
        <h1>Dashboard</h1>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Status</th>
              <th>ClientID</th>
              <th>Delivery Name</th>
              <th>Delivery city</th>
              <th>Delivery street</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
              {this.state.packages.map((pack)=>(<tr key={pack.id}>
                  <td>{pack.status}</td>
                  <td>{pack.clientId}</td>
                  <td>{pack.deliveryAddress.recipient.company==='' 
                  ? `${pack.deliveryAddress.recipient.name} 
                  ${pack.deliveryAddress.recipient.surname}` 
                  : pack.deliveryAddress.recipient.company}</td>
                  <td>{pack.deliveryAddress.city}</td>
                  <td>{pack.deliveryAddress.street} {pack.deliveryAddress.number}</td>
                  <td>x</td>
              </tr>))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
