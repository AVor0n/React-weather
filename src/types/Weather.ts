export type Weather = {
  weather: {
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  rain: {
    "1h": number;
  };
  snow: {
    "1h": number;
  };
  dt: number;
  timezone: number;
  name: string;
};

export type DayWeather = {
  weather: Weather;
  isLoading: boolean;
  response: {
    status: number;
    message: string;
  };
};
