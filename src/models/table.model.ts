export type IGameTable = string | null;
export const default_table: IGameTable[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  export type TikTAkToeStorage = {
    currentTurn:string;
    table: IGameTable[][];
    xWin: number;
    oWin: number;
  }