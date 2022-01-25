import React from "react";
import { Link } from "react-router-dom";
import s from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      Home
      <Link to={"/month-statistics"}>MonthStatistics</Link>
    </div>
  );
};

export default Home;
