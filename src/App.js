import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dbInfo: [
        {
          text: "this is dog opinion",
          img: "https://i.ytimg.com/vi/C_lpU5DiJ0Y/maxresdefault.jpg"
        },
        {
          text: "Another dog opinoin",
          img:
            "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"
        },
        {
          text: "The third dog opinion",
          img:
            "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&h=350"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.dbInfo.map((val, i) => {
          console.log("val", val);
          return <Display key={i} img={val.img} text={val.text} />;
        })}
      </div>
    );
  }
}

export default App;
