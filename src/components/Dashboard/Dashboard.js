import React, { Component } from "react";
import MainMenu from "../MainMenu";
import "./Dashboard.css";
import { getCustomersPromise, getPackagesPromise } from "../../services";

class Dashboard extends Component {
  state = {
    packages: [],
    customers: ""
  };

  syncClients = () =>
    getCustomersPromise().then(clients => this.setState({ clients }));

  syncPackages = () =>
    getPackagesPromise().then(packages => this.setState({ packages }));

  componentDidMount() {
    this.syncPackages();
    this.syncClients();
  }

  render() {
    return (
      <div className="Dashboard">
        <div style={{ width: "100%", background: "#eee" }}>
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
            {this.state.packages.map(pack => (
              <tr key={pack.id}>
                <td>{pack.status}</td>
                <td>{pack.client_id}</td>
                <td>{pack.delivery.city}</td>
                <td>{pack.dimensions.width}</td>
                <td />
                <td>x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
