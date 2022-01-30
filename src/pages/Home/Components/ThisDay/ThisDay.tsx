import GlobalSvgSelector from "../../../../shared/GlobalSvgSelector";
import { Weather } from "../../../../types/Weather";
import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  const temperature = Math.round(weather.main.temp);
  const city = weather.name;
  const iconId = weather.main.icon;
  const time = "00:00";

  return (
    <div className={s.thisDay}>
      <div className={s.thisDay__temperature}>{temperature}°</div>
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
