import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import styled from '@emotion/styled';

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const Card = styled.div`
  background-color: white;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 4px;
`;

function DragabbleCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {magic => (
        <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
          <span>{toDo}</span>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
