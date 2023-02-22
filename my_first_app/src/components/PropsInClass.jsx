import React, { Component } from "react";

class PropsInClass extends Component {
  render() {
    return (
      <div>
        <h1>
          Student name is {this.props.name} and the external exam result is{" "}
          {this.props.percent}
        </h1>
      </div>
    );
  }
}
export default PropsInClass;
