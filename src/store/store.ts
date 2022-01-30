import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dayWeatherSliceReducer from "./slices/dayWeatherSlice";

const rootReducer = combineReducers({
  dayWeatherSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
