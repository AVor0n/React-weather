import React, { useEffect, useState } from "react";
import GlobalSvgSelector from "../../../../shared/GlobalSvgSelector";
import s from "./ThisDay.module.scss";

export type Weather = "sunny" | "overcast" | "light-rain" | "rain-and-sun" | "rain";

type Props = {
  temperature: number;
  city: string;
  weather: Weather;
};

const ThisDay = ({ city, temperature, weather }: Props) => {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    setTime(getTime());
    const timer = setTimeout(() => setTime(getTime), 60 * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  function getTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

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
        <GlobalSvgSelector id={weather} />
      </div>
    </div>
  );
};

export default ThisDay;
