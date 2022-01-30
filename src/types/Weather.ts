export type Weather = {
  main: {
    temp: number;
    icon: string;
  };
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
