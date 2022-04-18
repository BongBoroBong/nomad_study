import { atom, selector } from 'recoil';

export enum Categories {
  'TODO' = 'TODO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TODO,
});

export const toDoState = atom<ITodo[]>({
  key: 'toDoState',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    if (category === Categories.TODO)
      return toDos.filter(todo => todo.category === Categories.TODO);
    if (category === Categories.DOING)
      return toDos.filter(todo => todo.category === Categories.DOING);
    if (category === Categories.DONE)
      return toDos.filter(todo => todo.category === Categories.DONE);
  },
});

export const minutesState = atom({
  key: 'minutes',
  default: 0,
});

export const hourSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = +newValue * 60;
    set(minutesState, minutes);
  },
});
