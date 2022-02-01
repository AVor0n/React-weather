import { PropsWithChildren, useState } from "react";
import ThemeContext, { Theme } from "../context/ThemeContext";
import Storage from "../model/Storage";

type Props = {};

const ThemeProvider = ({ children }: PropsWithChildren<Props>) => {
  const [theme, setTheme] = useState(Storage.getItem("theme") || Theme.LIGHT);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    Storage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
