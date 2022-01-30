import { WeatherService } from "../../services/WeatherService";
import { dayWeatherSlice } from "../slices/dayWeatherSlice";
import { AppDispatch } from "../store";

export const fetchDayWeather = (payload: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(dayWeatherSlice.actions.fetchDayWeather());

    const res = await WeatherService.getDayWeather(payload);
    if (res.status === 200) {
      dispatch(dayWeatherSlice.actions.fetchDayWeatherSuccess(res));
    } else {
      dispatch(dayWeatherSlice.actions.fetchDayWeatherError(res));
    }
  };
};
