import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom/atoms";

interface IForms {
  toDo: string;
}

const CreateTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForms>();
  const setTodos = useSetRecoilState(toDoState);
  const handleValid = ({ toDo }: IForms) => {
    setTodos((oldTodoList) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldTodoList]);
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
