import GlobalSvgSelector from "../../../../assets/svg/global/GlobalSvgSelector";
import s from "./ThisDayInfoLine.module.scss";

type Props = {
  iconId: string;
  label: string;
  value: string;
};

const ThisDayInfoLine = ({ iconId, label, value }: Props) => {
  return (
    <div className={s.thisDayInfoLine}>
      <div className={s.thisDayInfoLine__icon}>
        <GlobalSvgSelector id={iconId} />
      </div>
      <div className={s.thisDayInfoLine__label}>{label}</div>
      <div className={s.thisDayInfoLine__value}>{value}</div>
    </div>
  );
};

export default ThisDayInfoLine;
