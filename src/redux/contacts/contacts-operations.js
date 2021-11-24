import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, number }) => {
    const newContact = {
      name,
      number,
    };

    const response = await axios.post("/contacts", newContact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async () => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
