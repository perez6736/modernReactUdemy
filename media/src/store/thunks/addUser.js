import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

//parameter will be the action type that will be used to know if the api call is pending or fullfilled.
const addUser = createAsyncThunk("users/add", async () => {
  //request logic goes here.
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };
