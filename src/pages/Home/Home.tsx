import Header from "../../shared/Header/Header";
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
    </div>
  );
};

export default Home;
