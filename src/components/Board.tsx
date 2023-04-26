import { Droppable } from "react-beautiful-dnd";
import { Title } from "../style/DndStyle";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atom/atoms";
import { useSetRecoilState } from "recoil";

interface ITodoProps {
  toDos: ITodo[];
  boardId: string;
}

interface IDropArea {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const DropArea = styled.div<IDropArea>`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${({ isDraggingOver, draggingFromThisWith }) => (isDraggingOver ? "#48dbfb" : draggingFromThisWith ? "#00d2d3" : "#dff9fb")};
  border-radius: 5px;
  min-height: 200px;
  transition: background-color 0.25s ease-in-out;
`;

const BoardContainer = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: #dff9fb;
  border-radius: 5px;
  min-height: 200px;
  transition: background-color 0.25s ease-in-out;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;
interface IForm {
  toDo: string;
}
const Board = ({ toDos, boardId }: ITodoProps) => {
  // useRef => Dom에 직접접근
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodo = useSetRecoilState(toDoState);
  const handleValid = ({ toDo }: IForm) => {
    const newItem = {
      id: Date.now(),
      text: toDo,
    };
    setTodo((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newItem],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <BoardContainer>
        <Title>{boardId}</Title>
        <input type="text" {...register("toDo", { required: "할일을 작성해주세요" })} placeholder="할일을 작성해주세요" />
        <button>click</button>
        <Droppable droppableId={boardId}>
          {/* snapshot은 Droppable 내장 arg (마우스 오른쪽 클릭 후 go to type definition) */}
          {(provided, snapshot) => (
            <DropArea
              draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {toDos.map((toDo, index) => {
                return (
                  // Draggable의 key와 draggableId의 값은 같아야한다
                  <DraggableCard key={toDo.id.toString()} toDoId={toDo.id} toDoText={toDo.text} index={index} />
                );
              })}
              {/* beautiful dnd param 내에 있는 기능 (이동시킬때 부모 크기변동 X) */}
              {provided.placeholder}
            </DropArea>
          )}
        </Droppable>
      </BoardContainer>
    </Form>
  );
};

export default Board;
