import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { toDoCategorySelector } from './libs/recoils';
import { useRecoilState, useRecoilValue } from 'recoil';
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

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // if (!destination) return;
    // setToDos(oldToDos => {
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination?.index, 0, draggableId);
    //   return copyToDos;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {toDos.map((toDo, index) => (
            <Board key={`board_${index}`} toDos={toDo} boardId={`board_${index}`} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
