import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ backgroundColor: "black" }}>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{
            backgroundColor: "black",
            width: "100%",
            display: "center",
          }}
        >
          <div className="field">
            <label style={{ color: "white", textAlign: "center" }}>
              Search Anything
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
