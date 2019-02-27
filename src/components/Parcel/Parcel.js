import React, { Component } from "react";
import Leaflet from "leaflet";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { getPackagesPromise } from "../../services";

import MainMenu from "../MainMenu";
Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/";

class Parcel extends Component {
  state = {
    lat: 54.4032034,
    lng: 18.5694926,
    zoom: 15,
    latDelivered: 54.352,
    lngDelivered: 18.6466,
    parcel: undefined,
    customers: ""
  };
  getLocation;

  // syncPackages = () =>
  //   getPackagesPromise().then(packages => this.setState({ packages }));

  getIcon = () => {
    const icon = new Leaflet.Icon({
      iconUrl: "images/baseline-home-24px.svg",
      iconSize: [30, 41]
    });
    return icon;
  };
  componentDidMount() {
    // this.syncPackages();
    const { parcelId } = this.props.match.params;
    getPackagesPromise().then(data => {
      console.log(data);
      this.setState({
        parcel: data.find(parcel => parcel.id === parcelId)
      });
    });
  }
  render() {
    const { parcel } = this.state;
    //const position = [this.state.lat, this.state.lng];
    const positionDelivered = [
      this.state.latDelivered,
      this.state.lngDelivered
    ];

    if (parcel === undefined) {
      return <p>Loading...</p>;
    }

    return (
      <div className="TrackPanel">
        <MainMenu />
        <h2>Parcel page</h2>

        <ul className="deliveredParcels" />
        <ul className="history" />

        <LeafletMap
          center={[parcel.longitude, parcel.latitude]}
          zoom={this.state.zoom}
          style={{ height: 300 }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />

          <Marker position={positionDelivered}>
            <Popup>Sending address</Popup>
          </Marker>

          <Marker
            position={[parcel.longitude, parcel.latitude]}
          >
            <Popup>Delivery address</Popup>
          </Marker>
        </LeafletMap>
        <table className="ui celled table">
          <thead>
            <tr>
            <th>Sending Date</th>
            <th>Delivery Address</th>
              <th>City</th>
              <th>Delivery Date</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{parcel.date_send}</td>
            <td>{parcel.delivery.address}</td>
              <td>{parcel.delivery.city}</td>
              <td>{parcel.date_delivery}</td>
              <td>depth(mm): {parcel.dimensions.depth}<br/>
             height(mm): {parcel.dimensions.height}<br/>
             weight(kg): {parcel.dimensions.weight}<br/>
             width(mm): {parcel.dimensions.width}<br/>
             </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Parcel;
