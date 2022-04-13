import React from 'react';
import { useForm } from 'react-hook-form';

function TodoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      toDo: '@naver.com',
    },
  });
  const onValid = (data: any) => {
    console.log('data', data);
  };

  console.log(watch());
  console.log(errors);
  console.log(setError('toDo', {}));

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('toDo', {
            required: true,
            minLength: { value: 5, message: 'Your Todo is too short.' },
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: 'Your Email is not pattern.',
            },
          })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default TodoList;
