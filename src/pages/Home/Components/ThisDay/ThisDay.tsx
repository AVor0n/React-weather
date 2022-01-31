import WeatherAdapter from "../../../../model/WeatherAdapter";
import GlobalSvgSelector from "../../../../shared/GlobalSvgSelector";
import { Weather } from "../../../../types/Weather";
import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  const { temp } = WeatherAdapter.getTemperature(weather);
  const city = weather.name;
  const iconId = WeatherAdapter.getIconId(weather);
  const time = "00:00";

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
