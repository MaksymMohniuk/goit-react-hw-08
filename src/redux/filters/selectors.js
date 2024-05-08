import { createSelector } from "@reduxjs/toolkit";
import { selectPhonebookContacts } from "../contacts/selectors";
import { selectNameFilter } from "./slice";

export const selectFilteredContacts = createSelector(
  [selectPhonebookContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
