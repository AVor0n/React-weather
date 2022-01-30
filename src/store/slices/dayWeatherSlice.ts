import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { DayWeather, Weather } from "../../types/Weather";

const initialState: DayWeather = {
  weather: {
    main: {
      temp: 0,
      icon: "01d",
    },
    name: "",
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const dayWeatherSlice = createSlice({
  name: "day_weather",
  initialState,
  reducers: {
    fetchDayWeather(state) {
      state.isLoading = true;
    },
    fetchDayWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchDayWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});
export default dayWeatherSlice.reducer;
