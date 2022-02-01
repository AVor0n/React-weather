import WeatherAdapter from "../../../../model/WeatherAdapter";
import { Weather } from "../../../../types/Weather";
import ThisDayInfoLine from "../ThisDayInfoLine/ThisDayInfoLine";
import s from "./ThisDayInfo.module.scss";

type Props = {
  weather: Weather;
};

const ThisDayInfo = ({ weather }: Props) => {
  const { temp, feels_like } = WeatherAdapter.getTemperature(weather);
  const { speed, direction, strength } = WeatherAdapter.getWind(weather);
  const { pressure, grade } = WeatherAdapter.getPressure(weather);
  const precipitation = WeatherAdapter.getPrecipitation(weather);

  return (
    <div className={s.thisDayInfo}>
      <ThisDayInfoLine
        iconId="temperature"
        label="Температура"
        value={`${temp}° - ощущается как ${feels_like}°`}
      />
      <ThisDayInfoLine
        iconId="pressure"
        label="Давление"
        value={`${pressure} мм ртутного столба - ${grade}`}
      />
      <ThisDayInfoLine iconId="precipitation" label="Осадки" value={precipitation} />
      <ThisDayInfoLine
        iconId="wind"
        label="Ветер"
        value={`${speed} м/с ${direction} - ${strength}`}
      />
    </div>
  );
};

export default ThisDayInfo;
