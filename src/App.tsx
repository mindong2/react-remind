// react 18 -> npm i react-beautiful-dnd --legacy-peer-deps
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atom/atoms";
import { Wrapper, Boards } from './style/DndStyle'
import Board from './components/Board'


const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  /* react-beautiful-dnd 에서 onDragEnd에서는  
    result와 provide라는 인수를 받는다 (dnd 종료시 호출되는 함수)
    그중 destination -> 드롭 된 위치
    source -> 드래그 시작 위치
    타입은 해당 함수의 d.ts 참고
  */
  const onDragEnd = ({destination, source, draggableId} :DropResult) => {
    if(!destination) return;
    // setToDos(oldTodos => {
    //   const toDosCopy = [...oldTodos];
    //   toDosCopy.splice(source.index, 1);
    //   toDosCopy.splice(destination?.index, 0 , draggableId);
    //   return toDosCopy;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
