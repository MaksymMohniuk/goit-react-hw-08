import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "../contacts/slice";
import { filtersReducer } from "./slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
