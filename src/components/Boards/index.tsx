import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { toDoCategorySelector } from '../../libs/recoils';
import Board from '../Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

function Boards() {
  const toDos = useRecoilValue(toDoCategorySelector);

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (destination?.droppableId === source.droppableId) {
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <BoardWrapper>
          {Object.keys(toDos).map(boardId => {
            return <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />;
          })}
        </BoardWrapper>
      </Wrapper>
    </DragDropContext>
  );
}

export default Boards;
