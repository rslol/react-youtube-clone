import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
  /* How we initial state in a class based component */
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <FontAwesomeIcon icon="search" />
        {/* onChange method refers to any chage in the input field */}
        <input /* event refers to the info being passed to the input field, target the input tag, and grab the value from the input field */
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    /* setting this.state to the input */
    this.setState({ term });
    /* ?? I think this is where you take the onSearchTerm from app.js ?? */
    this.props.onSearchTerm(term);
  }
}

export default SearchBar;
