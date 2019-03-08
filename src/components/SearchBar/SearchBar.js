import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchPhrase: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
        searchPhrase: event.target.value})

  }
    handleChange = event => {
    this.setState({
      searchPhrase: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Input
          onChange={this.handleChange}
          onSubmit={this.handleChange}
          className="search-bar"
          action="Search"
          placeholder="Search..."
        />
        {console.log(this.state.searchPhrase)}
      </div>
    );
  }
}
export default SearchBar;
