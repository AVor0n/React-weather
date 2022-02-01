import { StylesConfig } from "react-select";
import { SelectOptions } from "./ReactSelectOptions";

export const selectStyles: StylesConfig<SelectOptions> = {
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
