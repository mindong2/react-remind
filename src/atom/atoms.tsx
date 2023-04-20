import { atom, selector } from "recoil";

/* enum은 아무 지정을 하지 않으면 0부터 ~~ 숫자로 표시되는데 지정도 가능하다. 
Categories.TO_Do 처럼 사용가능 타입
*/
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "categotyState",
  default: Categories.TO_DO,
});

export const toDoState = atom<ITodo[]>({
  key: "Todo",
  default: [],
});

// toDoState (atom) 에서 state를 받아와 state의 변화는 없이 다른 형식으로 selector를 output (오직 렌더링만)
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((v) => v.category === category);
  },
});
