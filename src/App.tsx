import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { toDoCategorySelector } from './libs/recoils';
import { useRecoilValue } from 'recoil';
import Board from './components/Board';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

function App() {
  const toDos = useRecoilValue(toDoCategorySelector);

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (destination?.droppableId === source.droppableId) {
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map(boardId => {
            return <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />;
          })}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
