import { useRecoilValue } from "recoil";
import { toDoState } from "../atom/atoms";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

const TodoList = () => {
  const Todos = useRecoilValue(toDoState);

  return (
    <>
      <h1>Todos</h1>
      <hr />
      <CreateTodo />
      <ul>
        {Todos.map((toDo) => (
          // props에 toDo 자체를 내려준다 Object타입을 그대로
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
