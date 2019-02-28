import React, { Component } from "react";
import MainMenu from "../MainMenu";
import { Link } from "react-router-dom";
import moment from "moment";

import { Select } from "semantic-ui-react";

import "./Dashboard.css";
import { getCustomersPromise, getPackagesPromise } from "../../services";
import SendParcel from "../SendParcel/SendParcel";

class Dashboard extends Component {
  state = {
    packages: [],
    customers: "",
    searchPhrase: "",
    pagination: 0,
    option: "all"
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
    const paginationPage = event.target.value;
    this.setState({
      pagination: paginationPage * 10
    });
  };
  handleOptionChange = (event,data) => {
    this.setState({
      option: data.value
    });
  };

  render() {
    return (
      <div className="Dashboard">
        <div style={{ width: "100%", background: "#eee" }}>
          <MainMenu />
        </div>
        <h1>Dashboard</h1>
        <SendParcel />
        <div className="ui input">
          <input
            placeholder="Search..."
            value={this.state.searchPhrase}
            onChange={this.handleChange}
          />
        </div>
        <Select
          placeholder="Select status"
          options={[
            { key: 1, value: "all", text: "All" },
            { key: 2, value: "received", text: "Received" },
            { key: 3, value: "send", text: "Send" },
            { key: 4, value: "pending", text: "Pending"}
          ]}
          onChange={this.handleOptionChange}
        />
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Date order</th>
              <th>Date send</th>
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
              .filter(pack =>
                this.state.option === "all"
                  ? true
                  : pack.status === this.state.option
              )
              .map(pack => (
                <tr key={pack.id}>
                  <td>{pack.date_order}</td>
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
              .slice(this.state.pagination, this.state.pagination + 10)}
          </tbody>
        </table>
        <div className="ui text container">
          {Array.from({
            length: Math.ceil(this.state.packages.length / 10)
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

export default Dashboard;
