import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Theme } from "../../context/ThemeContext";
import useTheme from "../../hooks/useTheme";
import GlobalSvgSelector from "../GlobalSvgSelector";
import s from "./Header.module.scss";
import { selectOptions, SelectOptions } from "../ReactSelect/ReactSelectOptions";
import { selectStyles } from "../ReactSelect/ReactSelectStyles";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { fetchDayWeather } from "../../store/thunks/fetchDayWeather";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectAppInfo } from "../../store/selectors";
import { appInfoSlice } from "../../store/slices/appInfoSlice";

type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme.theme);
  }, [theme.theme]);

  const dispatch = useTypedDispatch();
  const appInfo = useTypedSelector(selectAppInfo);

  useEffect(() => {
    dispatch(fetchDayWeather(appInfo.city));
  }, [appInfo.city]);

  const changeCity = (newValue: SingleValue<SelectOptions>) => {
    if (newValue) {
      dispatch(appInfoSlice.actions.changeCity(newValue.value));
    }
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
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          isMulti={false}
          options={selectOptions}
          styles={selectStyles}
          onChange={changeCity}
          value={selectOptions.find((option) => option.value === appInfo.city)}
        />
      </div>
    </header>
  );
};

export default Header;
