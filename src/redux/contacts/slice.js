import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts } from "./operations";
import { apiLogout } from "../auth/operations";

const INITIAL_STATE = {
  contacts: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",

  initialState: INITIAL_STATE,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
        state.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(apiLogout.fulfilled, (state) => {
        state.contacts = null;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected,
          apiLogout.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
