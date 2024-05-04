import { createSelector } from "@reduxjs/toolkit";
import { selectfetchedContacts } from "../contacts/selectors";
import { selectNameFilter } from "./slice";

export const selectFilteredContacts = createSelector(
  [selectfetchedContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
