import WeatherAdapter from "../../../../model/WeatherAdapter";
import GlobalSvgSelector from "../../../../shared/GlobalSvgSelector";
import { Weather } from "../../../../types/Weather";
import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
  time: string;
  city: string;
};

const ThisDay = ({ weather, time, city }: Props) => {
  const { temp } = WeatherAdapter.getTemperature(weather);
  const iconId = WeatherAdapter.getIconId(weather);

  return (
    <div className={s.thisDay}>
      <div className={s.thisDay__temperature}>{temp}°</div>
      <div className={s.thisDay__dayName}>Сегодня</div>
      <div className={s.thisDay__time}>
        Время: <span>{time}</span>
      </div>
      <div className={s.thisDay__city}>
        Город: <span>{city}</span>
      </div>
      <div className={s.thisDay__weather}>
        <GlobalSvgSelector id={iconId} />
      </div>
    </div>
  );
};

export default ThisDay;
