import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./contacts-actions";
import { fetchContact, addContact, deleteContact } from "./contacts-operations";

const contacts = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContact.fulfilled]: () => false,
  [fetchContact.pending]: () => true,
  [fetchContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [deleteContact.fullfiled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

const rootReducer = combineReducers({
  contacts,
  filter,
  loading,
  error,
});

export default rootReducer;
