import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null }; // after babel - this turns to a constructor and all

  componentDidMount() {
    console.log("my component was rendered to the screen.");
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("my component was updated to the screen.");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <div> Loading </div>;
    }
  }
}

export default App;
