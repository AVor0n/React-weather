import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../types/Weather";

export class WeatherService {
  static async getDayWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}
