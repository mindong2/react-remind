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

  const deleteTodo = () => {
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex(v => v.id === id);
      const copyOldTodos = [...oldTodos];
      copyOldTodos.splice(targetIndex,1)
      return copyOldTodos;
    })
  }

  return (
    <li>
      {text}
      {category !== Categories.TO_DO && <button onClick={() => btnClick(Categories.TO_DO)}>Todo</button>}
      {category !== Categories.DOING && <button onClick={() => btnClick(Categories.DOING)}>Doing</button>}
      {category !== Categories.DONE && <button onClick={() => btnClick(Categories.DONE)}>Done</button>}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default Todo;
