import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import DragabbleCard from '../DragabbleCard';
import { ITodo } from '../../libs/recoils';

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

const Wrapper = styled.div`
  background-color: #dadfe9;
  padding: 20px 10px;
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {magic => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo.text} toDo={toDo.text} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
