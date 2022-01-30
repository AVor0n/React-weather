import { Link } from "react-router-dom";
import s from "./MonthStatistics.module.scss";

type Props = {};

const MonthStatistics = (props: Props) => {
  return (
    <div className={s.monthStatistics}>
      MonthStatistics
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default MonthStatistics;
