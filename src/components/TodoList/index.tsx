import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector } from '../../libs/recoils';
import CreateToDo from '../CreateToDo';
import ToDo from '../ToDo';

export interface IForm {
  toDo: string;
}

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      <hr />
      <ul>
        {toDos?.map(value => (
          <ToDo key={value.id} {...value} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
