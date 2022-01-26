import ThisDayInfoLine from "../ThisDayInfoLine/ThisDayInfoLine";
import s from "./ThisDayInfo.module.scss";

type Props = {
  temperature: string;
  pressure: string;
  precipitation: string;
  wind: string;
};

const ThisDayInfo = ({ precipitation, pressure, temperature, wind }: Props) => {
  return (
    <div className={s.thisDayInfo}>
      <ThisDayInfoLine iconId="temperature" label="Температура" value={temperature} />
      <ThisDayInfoLine iconId="pressure" label="Давление" value={pressure} />
      <ThisDayInfoLine iconId="precipitation" label="Осадки" value={precipitation} />
      <ThisDayInfoLine iconId="wind" label="Ветер" value={wind} />
    </div>
  );
};

export default ThisDayInfo;
