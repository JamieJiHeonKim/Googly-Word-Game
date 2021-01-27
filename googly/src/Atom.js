import { atom } from "recoil";

export const controlOptions = atom({
  key: "controlOptions",
  default: {
    isRunning: false,
    speed: 5,
  },
});

export const wordsState = atom({
  key: "wordsState",
  default: [],
});
