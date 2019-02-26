import React, { Component } from "react";
import MainMenu from "../MainMenu";
import {Link} from 'react-router-dom'
import moment from 'moment'
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
              <th>Data send</th>
              <th>Status</th>
              <th>Delivery Name</th>
              <th>Delivery address</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.packages.slice()
            .sort((a, b) => moment(a.date_send).isAfter(b.date_send) ? -1 : 1)
            .map(pack => (
              <tr key={pack.id}>
                <td>{pack.date_send}</td>
                <td style={{color:pack.status==='received' ? '#006622' : (pack.status==='send' ? '#0099ff' : '#e68a00')}}>{pack.status}</td>
                <td>{pack.delivery.name}</td>
                <td>{pack.delivery.city}, {pack.delivery.address}</td>
                <td><Link to={`/dashboard/${pack.id}`}><button>Details</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
