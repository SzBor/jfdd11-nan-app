import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    packages: {
      id: 0,
      status: "delivered",
      type: "package",
      weight: 10,
      width: 20,
      height: 20,
      depth: 20,
      clientId: "12",
      deliveryAddress: {
        recipient: { company: "", name: "Greg", surname: "Mackiewicz" },
        city: "Gdansk",
        code: "80-120",
        street: "Hallera",
        number: "12c"
      }
    }
  };

  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>ClientID</th>
              <th>Delivery City</th>
              <th>Delivery street</th>
              <th>Id</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Dashboard;
