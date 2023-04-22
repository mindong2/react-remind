// react 18 -> npm i react-beautiful-dnd --legacy-peer-deps
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(myProp) => (
          <ul ref={myProp.innerRef} {...myProp.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(myDragProp) => (
                <li ref={myDragProp.innerRef} {...myDragProp.draggableProps}>
                  {/* dragHandleProps를 지정해준 요소를 드래그해야 이벤트가 일어남 */}
                  <span {...myDragProp.dragHandleProps}>🔥</span>
                  One
                </li>
              )}
            </Draggable>

            <Draggable draggableId="second" index={1}>
              {(myDragProp) => (
                <li ref={myDragProp.innerRef} {...myDragProp.draggableProps}>
                  <span {...myDragProp.dragHandleProps}>🔥</span>
                  Two
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
