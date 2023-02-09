export type INavigate =
  | "left"
  | "leftUp"
  | "up"
  | "upRight"
  | "right"
  | "rightDown"
  | "down"
  | "downLeft";

export type ICoordinates = {
    row:number|null; 
    cell:number|null
  };