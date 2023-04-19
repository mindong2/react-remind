import { ITodo } from "../atom/atoms";

const Todo = ({ text, category }: ITodo) => {
  return <li>{text}</li>;
};

export default Todo;
