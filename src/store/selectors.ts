import { RootState } from "./store";

export const selectDayWeatherData = (state: RootState) => state.dayWeatherSliceReducer;
export const selectAppInfo = (state: RootState) => state.appInfoSliceReducer;
