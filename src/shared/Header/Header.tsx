import React from "react";
import Select, { SelectComponentsConfig, SelectInstance, StylesConfig } from "react-select";
import GlobalSvgSelector from "../../assets/svg/global/GlobalSvgSelector";
import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const selectOptions: Array<ThemeOptions> = [
    { value: "Saint-Peterburg", label: "Санкт-Петербург" },
    { value: "Moscow", label: "Москва" },
    { value: "Samara", label: "Самара" },
  ];

  interface ThemeOptions {
    readonly value: string;
    readonly label: string;
  }

  const selectStyles: StylesConfig<ThemeOptions> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={selectOptions[0]} options={selectOptions} styles={selectStyles} />
      </div>
    </header>
  );
};

export default Header;
