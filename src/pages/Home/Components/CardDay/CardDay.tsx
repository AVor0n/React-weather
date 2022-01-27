import GlobalSvgSelector from "../../../../shared/GlobalSvgSelector";
import { Weather } from "../ThisDay/ThisDay";
import s from "./CardDay.module.scss";

export type DayInfo = {
  label: string;
  date: string;
  weatherIconId: Weather;
  temperatureNight: string;
  temperatureDay: string;
  weatherLabel: string;
};

const CardDay = (props: DayInfo) => {
  return (
    <div className={s.cardDay}>
      <div className={s.label}>{props.label}</div>
      <div className={s.date}>{props.date}</div>
      <div className={s.icon}>
        <GlobalSvgSelector id={props.weatherIconId} />
      </div>
      <div className={s.tempDay}>{props.temperatureDay}°</div>
      <div className={s.tempNight}>{props.temperatureNight}°</div>
      <div className={s.weatherLabel}>{props.weatherLabel}</div>
    </div>
  );
};

export default CardDay;
