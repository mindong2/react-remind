// react 18 -> npm i react-beautiful-dnd --legacy-peer-deps
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

const App = () => {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(myProp) => (
              <Board ref={myProp.innerRef} {...myProp.droppableProps}>
                {toDos.map((toDo, i) => {
                  return (
                    <Draggable draggableId={toDo} index={i}>
                      {(myDragProp) => (
                        <Card ref={myDragProp.innerRef} {...myDragProp.dragHandleProps} {...myDragProp.draggableProps}>
                          {/* dragHandleProps를 지정해준 요소를 드래그해야 이벤트가 일어남 */}
                          {toDo}
                        </Card>
                      )}
                    </Draggable>
                  );
                })}
                {/* beautiful dnd param 내에 있는 기능 (이동시킬때 부모 크기변동 X) */}
                {myProp.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
