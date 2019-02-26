import React, { Component } from "react";
import MainMenu from "../MainMenu";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Dashboard.css";
import { getCustomersPromise, getPackagesPromise } from "../../services";

class Dashboard extends Component {
  state = {
    packages: [],
    customers: "",
    searchPhrase: "",
    pagination:1
  };

  syncClients = () =>
    getCustomersPromise().then(clients => this.setState({ clients }));

  syncPackages = () =>
    getPackagesPromise().then(packages => this.setState({ packages }));

  componentDidMount() {
    this.syncPackages();
    this.syncClients();
  }

  handleChange = event => {
    this.setState({
      searchPhrase: event.target.value
    });
  };
  handlePaginationChange = event => {

  }

  render() {
    return (
      <div className="Dashboard">
        <div style={{ width: "100%", background: "#eee" }}>
          <MainMenu />
        </div>
        <h1>Dashboard</h1>
        <input value={this.state.searchPhrase} onChange={this.handleChange} />
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
            {this.state.packages
              .slice()
              .sort((a, b) =>
                moment(a.date_send).isAfter(b.date_send) ? -1 : 1
              )
              .map(pack => ({
                ...pack,
                searchData: (
                  pack.delivery.name +
                  pack.delivery.city +
                  pack.delivery.adress
                ).toLowerCase()
              }))
              .filter(pack =>
                pack.searchData.includes(this.state.searchPhrase.toLowerCase())
              )
              .map(pack => (
                <tr key={pack.id}>
                  <td>{pack.date_send}</td>
                  <td
                    style={{
                      color:
                        pack.status === "received"
                          ? "#006622"
                          : pack.status === "send"
                          ? "#0099ff"
                          : "#e68a00"
                    }}
                  >
                    {pack.status}
                  </td>
                  <td>{pack.delivery.name}</td>
                  <td>
                    {pack.delivery.city}, {pack.delivery.address}
                  </td>
                  <td>
                    <Link to={`/dashboard/${pack.id}`}>
                      <button className="ui button">Details</button>
                    </Link>
                  </td>
                </tr>
              ))
              .slice(0,10)}
          </tbody>
        </table>
        <div>
          {Array.from({length:Math.ceil(this.state.packages.length/10)}).map(((button,index)=>(<input type="button" value={index+1} onClick={this.handlePaginationChang} />)
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
