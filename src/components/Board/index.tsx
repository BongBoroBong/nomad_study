import React from 'react';
import DragabbleCard from '../DragabbleCard';
import { Droppable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
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

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {magic => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo.text} toDo={toDo.text} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
