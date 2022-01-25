import React from "react";
import { Link } from "react-router-dom";
import Header from "../../shared/Header/Header";
import s from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <Header />
      <Link to={"/month-statistics"}>MonthStatistics</Link>
    </div>
  );
};

export default Home;
