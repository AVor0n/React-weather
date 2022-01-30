import { RootState } from "./store";

export const selectDayWeatherData = (state: RootState) => state.dayWeatherSliceReducer;
