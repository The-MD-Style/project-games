import { ICoordinates, INavigate } from "../models/navigate.model";

export const navigate = (to: INavigate, row: number | null, cell: number | null):ICoordinates => {
    switch (to) {
      case "left":
        cell = cell != null && cell - 1 !== -1 ? cell - 1 : null;
        return { row, cell };
      case "leftUp":
        cell = cell != null && cell - 1 !== -1 ? cell - 1 : null;
        row = row != null && row - 1 !== -1 ? row - 1 : null;
        return { row, cell };
      case "up":
        row = row != null && row - 1 !== -1 ? row - 1 : null;
        return { row, cell };
      case "upRight":
        cell = cell != null && cell + 1 !== 3 ? cell + 1 : null;
        row = row != null && row - 1 !== -1 ? row - 1 : null;
        return { row, cell };
      case "right":
        cell = cell != null && cell + 1 !== 3 ? cell + 1 : null;
        return { row, cell };
      case "rightDown":
        cell = cell != null && cell + 1 !== 3 ? cell + 1 : null;
        row = row != null && row + 1 !== 3 ? row + 1 : null;
        return { row, cell };
      case "down":
        row = row != null && row + 1 !== 3 ? row + 1 : null;
        return { row, cell };
      case "downLeft":
        cell = cell != null && cell - 1 !== -1 ? cell - 1 : null;
        row = row != null && row + 1 !== 3 ? row + 1 : null;
        return { row, cell };
    }
  };

export const back_nav = (to: INavigate): INavigate => {
  switch (to) {
    case "down":
      return "up";
    case "up":
      return "down";
    case "left":
      return "right";
    case "right":
      return "left";
    case "downLeft":
      return "upRight";
    case "upRight":
      return "downLeft";
    case "rightDown":
      return "leftUp";
    case "leftUp":
      return "rightDown";
  }
};

export const directions: INavigate[] = [
  "left",
  "leftUp",
  "up",
  "upRight",
  "right",
  "rightDown",
  "down",
  "downLeft",
];