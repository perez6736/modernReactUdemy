import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//parameter will be the action type that will be used to know if the api call is pending or fullfilled.
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  //request logic goes here.
  const response = await axios.get("http://localhost:3001/users");

  await pause(5000); //dev only - to test the loading screen.
  return response.data;
});

//dev helper function
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
