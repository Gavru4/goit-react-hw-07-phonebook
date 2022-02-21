import { createReducer } from "@reduxjs/toolkit";
import { writeContacts, removeContacts } from "./contactsActions";
import { getContacts } from "./contactsOperation";

export const contactsRudeser = createReducer([], {
  [writeContacts]: (state, { payload }) => [...state, payload],
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContacts]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

export const isLoadingReduser = createReducer(false, {});
