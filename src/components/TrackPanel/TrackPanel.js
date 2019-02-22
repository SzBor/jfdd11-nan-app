import React, { Component } from "react";
import Leaflet from 'leaflet'

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'


class TrackPanel extends Component {
  state = {
    lat: 54.4032034,
    lng: 18.5694926,
    zoom: 15
  };
  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="TrackPanel">
        <h2>Track Panel</h2>
        <input type="text" placeholder="Search" />
        <ul className="deliveredParcels" />
        <ul className="history" />
        <LeafletMap center={position} zoom={this.state.zoom} style={{ height: 300 }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LeafletMap>
       
      </div>
    );
  }
}

export default TrackPanel;
