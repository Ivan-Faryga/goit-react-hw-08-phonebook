import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "contacts", // прописываем название ключа в хранилище
  initialState: "",
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
