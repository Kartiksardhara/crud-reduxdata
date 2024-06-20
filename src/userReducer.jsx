import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const users = state.find((user) => user.id === id);
      if (users) {
        users.name = name;
        users.email = email;
      }
    },
    DeleteUser: (state, action) => {
      const { id } = action.payload;
      const users = state.find((user) => user.id === id);
      if (users) {
        return state.filter((data) => data.id !== id);
      }
    },
  },
});
export const { addUser, updateUser, DeleteUser } = userSlice.actions;
export default userSlice.reducer;
