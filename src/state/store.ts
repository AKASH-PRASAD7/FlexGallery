import { configureStore } from "@reduxjs/toolkit";
import imageSliceReducer from "./imageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      image: imageSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
