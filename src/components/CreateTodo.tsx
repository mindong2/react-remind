import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atom/atoms";

interface IForms {
  toDo: string;
}

const CreateTodo = () => {
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForms>();
  const setTodos = useSetRecoilState(toDoState);
  const handleValid = ({ toDo }: IForms) => {
    setTodos((oldTodoList) => [{ text: toDo, id: Date.now(), category }, ...oldTodoList]);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          type="text"
          {...register("toDo", {
            required: "할일을 작성해주세요",
          })}
          placeholder="Todo"
        />
        <button>add</button>
        <p>{errors?.toDo?.message}</p>
      </form>
    </div>
  );
};

export default CreateTodo;
