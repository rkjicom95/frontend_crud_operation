import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./redux/userDetail";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
