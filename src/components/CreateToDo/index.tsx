import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { IForm } from '../TodoList';
import { Categories, toDoState } from '../../libs/recoils';

function CreateToDo() {
  const setTodos = useSetRecoilState(toDoState);

  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      toDo: '',
    },
  });
  const onValid = ({ toDo }: IForm) => {
    setTodos(oldTodo => [
      { id: Date.now(), text: toDo, category: Categories.TODO },
      ...oldTodo,
    ]);
    setValue('toDo', '');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('toDo', {
          required: true,
          minLength: { value: 2, message: 'Your Todo is too short.' },
        })}
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
