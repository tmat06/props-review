import React from "react";

export default class Display extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          height: "100px",
          width: "500px",
          boxShadow: "1px 1px 1px #333",
          margin: "10px",
          padding: "20px"
        }}
      >
        <div
          style={{
            float: "left",
            height: "80px",
            width: "80px",
            marginRight: "10px"
          }}
        >
          <img
            src={this.props.img}
            style={{ height: "100%", width: "100%" }}
            alt="dog profile pic"
          />
        </div>
        <div
          style={{
            float: "left",
            height: "80px",
            width: "400px",
            border: "1px solid lightblue",
            textAlign: "left"
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}
