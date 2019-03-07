import React, { Component } from "react";

import SearchBar from "../SearchBar";
import { Button, Modal } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LogIn from "../LogIn";
import Auth from "../Auth/Auth";
import { withAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
import image from "../MainMenu/trackenLogo.svg";
import { getPackagesPromise } from "../../services";
import "./HomeView.css";

class CustomButton extends Component {
  render() {
    return <NavLink {...this.props} />;
  }
}

class HomeView extends Component {
  state = {
    parcel: {
      client_id: "-LZZyhU5d6efiXiWz1B-",
      date_order: "2018-02-23",
      date_send: "2018-12-04",
      dimensions: {
        depth: "",
        height: "",
        weight: "34",
        width: "24"
      },
      id: "-LZoFSPw4Nb7sLajyxjK",
      latitude: 52.6269375,
      longitude: 16.4463703,
      status: "pending"
    }
  };

  componentDidMount() {
    const { parcelId } = this.props.match.params;
    getPackagesPromise().then(data => {
      this.setState({
        parcel: data.find(parcel => parcel.id === "-LZoFSPwNb7sLajyxjK") || null
      });
    });
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { parcel } = this.state;
    return (
      <div className="HomeView">
        <Auth
          cover={() => (
            <header className="homeView-buttons">
              <Modal
                content={<LogIn />}
                trigger={<Button inverted>Log in</Button>}
                hideOnScroll={false}
                on={"click"}
                position={"top center"}
                basic
              />

              <Button
                to="/sign-up"
                as={CustomButton}
                inverted
                style={{ marginLeft: "0.5em" }}
              >
                Sign Up
              </Button>
            </header>
          )}
        >
          <header className="homeView-buttons">
            <Button to="/dashboard" as={CustomButton} inverted>
              Dashboard
            </Button>
            <Button
              onClick={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(() => this.props.history.push("/"))
              }
            >
              Sign out
            </Button>
          </header>
        </Auth>
        <div>
          <div className="tracken-logo">
            <img src={image} alt="tracken-logo" />
            <p>TRACKEN</p>
          </div>
          <div className="homeView-search">
            <h2>Find your package</h2>
            <SearchBar />
          </div>
        </div>
        {/*         <div className="homeView-footer">
          Footer
          <div>Contact us</div>
        </div> */}
        {(parcel === null)? <p style={{textAlign:"center"}}>"Incorrect package number "</p>:<table className="ui celled table">
          <thead>
            <tr>
              <th>Sending Date</th>
              <th>Status</th>
              <th>Courier ID</th>
              <th>Delivery Date</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{parcel.date_send}</td>
              <td
                style={{
                  color:
                    parcel.status === "received"
                      ? "#006622"
                      : parcel.status === "send"
                      ? "#0099ff"
                      : "#e68a00"
                }}
              >
                {parcel.status}
              </td>
              <td>{parcel.courier_id}</td>
              <td>{parcel.date_delivery}</td>
              <td>
                depth(mm): {parcel.dimensions.depth}
                <br />
                height(mm): {parcel.dimensions.height}
                <br />
                width(mm): {parcel.dimensions.width}
                <br />
                weight(kg): {parcel.dimensions.weight}
                <br />
              </td>
            </tr>
          </tbody>
        </table>}
      </div>
    );
  }
}

export default withAuth(HomeView);
