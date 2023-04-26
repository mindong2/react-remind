import { atom } from "recoil";

interface ITodo {
  [key : string] : string[];
}

export const toDoState = atom<ITodo>({
  key: "toDoState",
  default: {
    'To Do' : ["a", "b"],
    doing : ["c", "d", "e"],
    done : ["f"]
  },
});

