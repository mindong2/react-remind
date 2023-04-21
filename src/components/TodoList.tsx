import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, Categories } from "../atom/atoms";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const selectOnInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as Categories);
  };
  return (
    <>
      <h1>Todos</h1>
      <hr />
      <select value={category} onInput={selectOnInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {toDos.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </>
  );
};

export default TodoList;
