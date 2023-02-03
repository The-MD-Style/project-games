import { X, O, space } from './custom';

const icons = {
  X,
  O,
  space
};

export type Icons = keyof typeof icons;

export default icons;
