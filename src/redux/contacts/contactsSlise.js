import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContact } from "./contacts-operations";
import { filterContact } from "./contact-actions";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // [filterContact]: (state, action) => ({
    //   ...state,
    //   filter: action.payload,
    // }),
    [filterContact](state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContact.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      items: action.payload,
    }),
    [fetchContact.pending]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [fetchContact.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [addContact.fulfilled]: (state, action) => ({
      ...state,
      items: [action.payload, ...state.items],
      isLoading: false,
      error: null,
    }),
    [addContact.pending]: (state, action) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      items: state.filter((contact) => contact.id !== action.payload),
      isLoading: false,
      error: null,
    }),
  },
});

export const { filterAction } = contactSlice.actions;
export default contactSlice.reducer;
