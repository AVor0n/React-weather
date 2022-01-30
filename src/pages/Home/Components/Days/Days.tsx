import CardDay, { DayInfo } from "../CardDay/CardDay";
import Tabs from "../Tabs/Tabs";
import s from "./Days.module.scss";

type Props = {
  daysInfo: Array<DayInfo>;
};

const Days = ({}: Props) => {
  const daysInfo: DayInfo[] = [
    {
      label: "Сегодня",
      date: "28 авг",
      weatherIconId: "rain-and-sun",
      temperatureDay: "+18",
      temperatureNight: "+15",
      weatherLabel: "Облачно",
    },
    {
      label: "Завтра",
      date: "29 авг",
      weatherIconId: "sunny",
      temperatureDay: "+23",
      temperatureNight: "+17",
      weatherLabel: "Ясно",
    },
    {
      label: "Пн",
      date: "30 авг",
      weatherIconId: "rain",
      temperatureDay: "+20",
      temperatureNight: "+14",
      weatherLabel: "Дождь",
    },
    {
      label: "Вт",
      date: "31 авг",
      weatherIconId: "overcast",
      temperatureDay: "+16",
      temperatureNight: "+10",
      weatherLabel: "Пасмурно",
    },
    {
      label: "Ср",
      date: "29 авг",
      weatherIconId: "sunny",
      temperatureDay: "+23",
      temperatureNight: "+17",
      weatherLabel: "Ясно",
    },
    {
      label: "Чт",
      date: "30 авг",
      weatherIconId: "rain",
      temperatureDay: "+20",
      temperatureNight: "+14",
      weatherLabel: "Дождь",
    },
    {
      label: "Пт",
      date: "31 авг",
      weatherIconId: "overcast",
      temperatureDay: "+16",
      temperatureNight: "+10",
      weatherLabel: "Пасмурно",
    },
  ];

  return (
    <div>
      <Tabs />

      <div className={s.days}>
        {daysInfo.map((dayInfo) => (
          <CardDay
            key={dayInfo.date}
            label={dayInfo.label}
            date={dayInfo.date}
            weatherIconId={dayInfo.weatherIconId}
            temperatureDay={dayInfo.temperatureDay}
            temperatureNight={dayInfo.temperatureNight}
            weatherLabel={dayInfo.weatherLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default Days;
