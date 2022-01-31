import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { DayWeather, Weather } from "../../types/Weather";

const initialState: DayWeather = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
    },
    dt: 0,
    rain: {
      "1h": 0,
    },
    snow: {
      "1h": 0,
    },
    timezone: 0,
    wind: {
      deg: 0,
      speed: 0,
    },
    weather: { icon: "10n" },
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
