import { Weather } from "../types/Weather";
import weatherIconAdapter from "./WeatherIconAdapter";
import Converter from "./Converter";

class WeatherAdapter {
  static getTemperature(weather: Weather, precision = 0) {
    return {
      temp: weather.main.temp.toFixed(precision),
      feels_like: weather.main.feels_like.toFixed(precision),
    };
  }

  static getWind(weather: Weather, precision = 1) {
    return {
      speed: weather.wind.speed.toFixed(precision),
      direction: Converter.degreeToDirection(weather.wind.deg),
      strength: Converter.windSpeedToStrength(weather.wind.speed),
    };
  }

  static getPressure(weather: Weather, precision = 2) {
    const pressureValue = Converter.hPaToMmHg(weather.main.pressure);
    return {
      pressure: pressureValue.toFixed(precision),
      grade: Converter.pressureToGrade(pressureValue),
    };
  }
  static getPrecipitation(weather: Weather, precision = 1) {
    if (weather.snow) {
      const snowVolume = weather.snow["1h"].toFixed(precision);
      return `снег - ${snowVolume} мм за час`;
    }
    if (weather.rain) {
      const rainVolume = weather.rain["1h"].toFixed(precision);
      return `дождь - ${rainVolume} мм за час`;
    }
    return "без осадков";
  }

  static getIconId(weather: Weather) {
    return weatherIconAdapter(weather.weather.icon);
  }

  static getTimeZone(weather: Weather) {
    return weather.timezone;
  }
}

export default WeatherAdapter;
