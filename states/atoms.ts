import { atom } from "recoil";

export const initialState = atom({
  default: true,
  key: "initialState",
});

export const sideMenuState = atom({
  default: false,
  key: "sideMenuState",
});

export const darkModeState = atom({
  default: false,
  key: "darkModeState",
});
