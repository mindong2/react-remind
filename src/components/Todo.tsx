import { useSetRecoilState } from "recoil";
import { ITodo } from "../atom/atoms";
import { toDoState } from '../atom/atoms'


const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(toDoState)

  const btnClick = (name : 'TO_DO' | 'DOING' | 'DONE') =>{
    
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex(v => v.id === id);
      const newTodo = {text, id, category: name};

      // 기존의 요소를 return하면 re-rendering 되지 않는다. (ex: oldTodos)
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex+1)
      ]
    })
  }

  return (
    <li>
      {text}
      {category !== 'TO_DO' && <button  onClick={() => btnClick('TO_DO')}>Todo</button>}
      {category !== 'DOING' && <button  onClick={() => btnClick('DOING')}>Doing</button>}
      {category !== 'DONE' && <button  onClick={() => btnClick('DONE')}>Done</button>}
    </li>
  );
};

export default Todo;
