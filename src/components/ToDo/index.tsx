import React from 'react';
import { ITodo } from '../../libs/recoils';

function ToDo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
