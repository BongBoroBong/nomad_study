import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import styled from '@emotion/styled';

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
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  background-color: #dadfe9;
  padding: 30px 10px;
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  background-color: white;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 4px;
`;

function App() {
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  const onDragEnd = ({}: DropResult) => {};

  const toDos = ['a', 'b', 'c', 'd', 'e', 'f'];

  return (
    <>
      {winReady ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Wrapper>
            <Boards>
              <Droppable droppableId="one">
                {magic => (
                  <Board ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map((todo, index) => (
                      <Draggable key={index} draggableId={todo} index={index}>
                        {magic => (
                          <Card
                            ref={magic.innerRef}
                            {...magic.draggableProps}
                            {...magic.dragHandleProps}>
                            <span>{todo}</span>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {magic.placeholder}
                  </Board>
                )}
              </Droppable>
            </Boards>
          </Wrapper>
        </DragDropContext>
      ) : null}
    </>
  );
}

export default App;
