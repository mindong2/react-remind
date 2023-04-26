import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "../style/DndStyle";

interface ICard {
  toDoText: string;
  toDoId: number;
  index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: ICard) => {
  return (
    <Draggable key={toDoId.toString()} draggableId={toDoId.toString()} index={index}>
      {(provided, snapshot) => (
        <Card isDragging={snapshot.isDragging} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          {/* dragHandleProps를 지정해준 요소를 드래그해야 이벤트가 일어남 */}
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

/* 
  컴포넌트의 prop이 바뀌지 않았으면 부모의 state가 변경되어도 재렌더링 하지 말아달라는 의미
  변경된 prop에 대해서만 재렌더링
 */
export default React.memo(DraggableCard);
