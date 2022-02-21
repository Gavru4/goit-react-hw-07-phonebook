import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const removeContacts = createAction("contacts/removeContacts");

export const writeContacts = createAction(
  "contacts/writeContacts",
  (contact) => {
    return {
      payload: { ...contact, id: nanoid() },
    };
  }
);
