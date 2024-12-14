import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("todo")) || [],
};

const todoSlice = createSlice({
  name: "todoSlise29",
  initialState,
  reducers: {
    getdata(state, { payload }) {
      const newData = [
        ...state.data,
        { ...payload, id: Date.now(), isActive: false },
      ];
      state.data = newData;
      localStorage.setItem("todo", JSON.stringify(newData));
    },

    deletData(state, { payload }) {
      console.log(payload);
      state.data = state.data.filter((item) => item.id !== payload);
      localStorage.setItem("todo", JSON.stringify(state.data));
    },

    editData(state, { payload }) {},
  },
});

export const { getdata, deletData, editData } = todoSlice.actions;

export default todoSlice.reducer;
