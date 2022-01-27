import GlobalSvgSelector from "../GlobalSvgSelector";
import { Weather } from "../../pages/Home/Components/ThisDay/ThisDay";
import ThisDayInfoLine from "../../pages/Home/Components/ThisDayInfoLine/ThisDayInfoLine";
import s from "./Popup.module.scss";

type Props = {
  temp: string;
  dayName: string;
  city: string;
  time: string;
  weather: Weather;
  temperature: string;
  pressure: string;
  precipitation: string;
  wind: string;
};

const Popup = (props: Props) => {
  return (
    <div className={s.popup}>
      <div className={s.popup__content}>
        <div className={s.thisDay}>
          <div className={s.temperature}>{props.temp}°</div>
          <div className={s.dayName}>{props.dayName}</div>
          <div className={s.icon}>
            <GlobalSvgSelector id={props.weather} />
          </div>
          <div className={s.time}>
            Время: <span>{props.time}</span>
          </div>
          <div className={s.city}>
            Город: <span>{props.city}</span>
          </div>
        </div>

        <div className={s.thisDayInfo}>
          <ThisDayInfoLine iconId="temperature" label="Температура" value={props.temperature} />
          <ThisDayInfoLine iconId="pressure" label="Давление" value={props.pressure} />
          <ThisDayInfoLine iconId="precipitation" label="Осадки" value={props.precipitation} />
          <ThisDayInfoLine iconId="wind" label="Ветер" value={props.wind} />
        </div>

        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
