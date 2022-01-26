import Header from "../../shared/Header/Header";
import Popup from "../../shared/Popup/Popup";
import Days from "./Components/Days/Days";
import Tabs from "./Components/Tabs/Tabs";
import ThisDay from "./Components/ThisDay/ThisDay";
import ThisDayInfo from "./Components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

type Props = {};

const Home = ({}: Props) => {
  return (
    <div className={s.home}>
      <Header />

      <div className={s.container}>
        <ThisDay temperature={20} city={"Москва"} weather="sunny" />
        <ThisDayInfo
          temperature="20° - ощущается как 17°"
          pressure="765 мм ртутного столба - нормальное"
          precipitation="Без осадков"
          wind="3 м/с юго-запад - легкий ветер"
        />
      </div>

      <Days daysInfo={[]} />

      <Popup
        city="Москва"
        temp="20"
        time="22:34"
        weather="overcast"
        dayName="Среда"
        temperature="20° - ощущается как 17°"
        pressure="765 мм ртутного столба - нормальное"
        precipitation="Без осадков"
        wind="3 м/с юго-запад - легкий ветер"
      />
    </div>
  );
};

export default Home;
