import { atom } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
  category: 'TODO' | 'DOING' | 'DONE';
}

export const toDoState = atom<ITodo[]>({
  key: 'toDoState',
  default: [],
});
