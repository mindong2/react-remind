import { atom, selector } from "recoil";

export const minuteState = atom<number>({
  key: "atomState",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hourSelector",
  get: ({ get }) => {
    // readonly
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    // atom을 수정
    const hours = Number(newValue) * 60;
    set(minuteState, hours);
  },
});
