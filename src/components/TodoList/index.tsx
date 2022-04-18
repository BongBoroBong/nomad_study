import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { toDoState } from '../../libs/recoils';
import CreateToDo from '../CreateToDo';
import ToDo from '../ToDo';

export interface IForm {
  toDo: string;
}

function TodoList() {
  const todos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <ul>
        {todos.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
