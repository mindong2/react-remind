import { atom, selector } from "recoil";
/*
Recoil-persist를 사용하면 이전처럼 새로고침을 해도 recoil state가 날라가지 않고 sessionStorage 또는 localStorage에 보관됩니다.
아무런 설정도 해주지 않으면 key는 'recoil-persist', 저장소는 localStorage에 기본적으로 저장됩니다
*/
import { recoilPersist } from 'recoil-persist';
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

// persist (localStorage)에 toDoState가 관리된다.
const { persistAtom } = recoilPersist({
  key : 'toDoStatePersist',
  storage : localStorage
})

export const toDoState = atom<ITodo[]>({
  key: "Todo",
  default: [],
  // recoil-persist 적용
  effects_UNSTABLE : [persistAtom],
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
