import { useSetRecoilState } from "recoil";
import { ITodo, toDoState, Categories } from "../atom/atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(toDoState);
  const btnClick = (name: Categories) => {
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((v) => v.id === id);
      const newTodo = { text, id, category: name };

      // 기존의 요소를 return하면 re-rendering 되지 않는다. (ex: oldTodos)
      return [...oldTodos.slice(0, targetIndex), newTodo, ...oldTodos.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      {text}
      {category !== "TO_DO" && <button onClick={() => btnClick(Categories.TO_DO)}>Todo</button>}
      {category !== "DOING" && <button onClick={() => btnClick(Categories.DOING)}>Doing</button>}
      {category !== "DONE" && <button onClick={() => btnClick(Categories.DONE)}>Done</button>}
    </li>
  );
};

export default Todo;
