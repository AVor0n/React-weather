import { useEffect } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../../shared/Header/Header";
import Popup from "../../shared/Popup/Popup";
import { selectDayWeatherData } from "../../store/selectors";
import { fetchDayWeather } from "../../store/thunks/fetchDayWeather";
import Days from "./Components/Days/Days";
import ThisDay from "./Components/ThisDay/ThisDay";
import ThisDayInfo from "./Components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

type Props = {};

const Home = ({}: Props) => {
  const city = "Orenburg";
  const dispatch = useTypedDispatch();

  const { weather } = useTypedSelector(selectDayWeatherData);

  useEffect(() => {
    dispatch(fetchDayWeather(city));
  }, []);

  return (
    <div className={s.home}>
      <Header />

      <div className={s.container}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>

      <Days daysInfo={[]} />

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
