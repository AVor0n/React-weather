import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { Theme } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";
import GlobalSvgSelector from "../GlobalSvgSelector";
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
      backgroundColor: "var(--color-card-bg)",
      width: "fit-content",
      minWidth: "200px",
      maxWidth: "250px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "var(--color-text)",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--color-text)",
    }),
    menuList: (styles) => ({
      ...styles,
      backgroundColor: "var(--color-panel-bg)",
      borderRadius: "var(--border-radius-card)",
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: "var(--border-radius-card)",
    }),
    option: (styles, { isSelected, isFocused }) => ({
      ...styles,
      color: isSelected ? "var(--color-page-bg)" : "var(--color-text)",
      backgroundColor: isSelected
        ? "var(--color-primary)"
        : isFocused
        ? "var(--color-card-bg)"
        : undefined,
    }),
  };

  const theme = useTheme();

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme.theme);
  }, [theme.theme]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select placeholder="Выберите город" options={selectOptions} styles={selectStyles} />
      </div>
    </header>
  );
};

export default Header;
