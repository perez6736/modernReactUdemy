import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => console.log(pos.coords.latitude),
      (err) => console.log(err)
    );

    return <div> Latitude: </div>;
  }
}

export default App;
