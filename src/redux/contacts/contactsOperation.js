import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsApi } from "../../utils/contactsApi";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
