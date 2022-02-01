import { useEffect } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../../shared/Header/Header";
import Popup from "../../shared/Popup/Popup";
import { selectAppInfo, selectDayWeatherData } from "../../store/selectors";
import { fetchDayWeather } from "../../store/thunks/fetchDayWeather";
import Days from "./Components/Days/Days";
import ThisDay from "./Components/ThisDay/ThisDay";
import ThisDayInfo from "./Components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";
import { appInfoSlice } from "../../store/slices/appInfoSlice";
import WeatherAdapter from "../../model/WeatherAdapter";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

type Props = {};

const Home = ({}: Props) => {
  const dispatch = useTypedDispatch();
  const { weather } = useTypedSelector(selectDayWeatherData);
  const { city, time } = useTypedSelector(selectAppInfo);

  useEffect(() => {
    dispatch(fetchDayWeather(city));
  }, []);

  useEffect(() => {
    const timezone = WeatherAdapter.getTimeZone(weather);
    const time = dayjs.utc().add(timezone, "second").format("HH:mm");
    dispatch(appInfoSlice.actions.updateTime(time));
  }, [weather.timezone]);

  return (
    <div className={s.home}>
      <Header />

      <div className={s.container}>
        <ThisDay weather={weather} time={time} city={city} />
        <ThisDayInfo weather={weather} />
      </div>

      {/* <Days daysInfo={[]} /> */}

      {/* <Popup
        city="Москва"
        temp="20"
        time="22:34"
        weather="overcast"
        temperature="20° - ощущается как 17°"
        pressure="765 мм ртутного столба - нормальное"
        precipitation="Без осадков"
        wind="3 м/с юго-запад - легкий ветер"
      /> */}
    </div>
  );
};

export default Home;
