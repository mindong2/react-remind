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
  const onDragEnd = (info :DropResult) => {
    const { destination, source, draggableId } = info;
    if(!destination) return;
    
    if(destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const copyBoard = [...allBoards[source.droppableId]];
        copyBoard.splice(source.index, 1);
        copyBoard.splice(destination?.index, 0 , draggableId);
        return {
          ...allBoards,
          // object의 키가 이미 있기때문에 update를 할때는 아래 작성하면 덮어진다
          [source.droppableId] : copyBoard
        };
      });
    }else{
      setToDos((allBoards) => {
        const copyStartBoard = [...allBoards[source.droppableId]];
        const copyEndBoard = [...allBoards[destination.droppableId]];
        copyStartBoard.splice(source.index, 1);
        copyEndBoard.splice(destination?.index, 0 , draggableId);
        
        return {
          ...allBoards,
          [source.droppableId] : copyStartBoard,
          [destination.droppableId] : copyEndBoard
        };
        
      });
    }

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
