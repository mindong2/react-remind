import { atom } from "recoil";

interface ITodo {
  [key : string] : string[];
}

export const toDoState = atom<ITodo>({
  key: "toDoState",
  default: {
    to_do : ["a", "b"],
    doing : ["c", "d"],
    done : ["e", "f"]
  },
});

