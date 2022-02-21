import { createReducer } from "@reduxjs/toolkit";
import { writeContacts, removeContacts } from "./contactsActions";

export const contactsRudeser = createReducer([], {
  [writeContacts]: (state, { payload }) => {
    const contacts = [...state, payload];

    return contacts;
  },

  [removeContacts]: (state, { payload }) => {
    const contacts = state.filter((el) => el.id !== payload);

    return contacts;
  },
});
