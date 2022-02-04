import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    icon: "sun",
  },
  winter: {
    text: "Burr it's icy Burr!",
    icon: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div>
      <i className={`icon ${season === "winter" ? "snowflake" : " sun"}`} />
      <h1>{season === "summer" ? "Let's hit the beach." : "Burr it's icy."}</h1>
      <i className={`icon ${season === "winter" ? "snowflake" : " sun"}`} />
    </div>
  );
}

export default SeasonDisplay;
