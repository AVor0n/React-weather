import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export default createContext({
  theme: Theme.LIGHT,
  changeTheme: (theme: Theme) => {},
});
