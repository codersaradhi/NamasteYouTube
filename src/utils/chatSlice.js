import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 2);
      /*let fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(1, 2); // removes 2 items starting from index 1
console.log(fruits); // ["apple", "orange"] */
      // state.messages.push(action.payload); // it will push like normal from end
      state.messages.unshift(action.payload); // it will push the data form first end of array.
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
