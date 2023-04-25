import { Droppable } from 'react-beautiful-dnd';
import { BoardWrap } from '../style/DndStyle';
import DraggableCard from './DraggableCard'

interface ITodoProps {
    toDos : string[],
    boardId : string
}

const Board = ({ toDos, boardId } : ITodoProps) => {
    return (
        <>
            <Droppable droppableId={boardId}>
            {(myProp) => (
              <BoardWrap ref={myProp.innerRef} {...myProp.droppableProps}>
                {toDos.map((toDo, index) => {
                  return (
                    // Draggable의 key와 draggableId의 값은 같아야한다
                    <DraggableCard key={toDo} toDo={toDo} index={index} />
                  );
                })}
                {/* beautiful dnd param 내에 있는 기능 (이동시킬때 부모 크기변동 X) */}
                {myProp.placeholder}
              </BoardWrap>
            )}
          </Droppable>
        </>
    );
};

export default Board;