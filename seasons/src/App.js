import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => console.log(pos.coords.latitude),
      (err) => console.log(err)
    );

    return <div> Latitude: </div>;
  }
}

export default App;
