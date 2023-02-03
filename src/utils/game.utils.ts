import { IGameTable } from "../models/table.model";
import { back_nav, directions, navigate } from "./navigate.utils";

  export const winFunction = (value: IGameTable[][], row: number, cell: number) => {
    directions.map((dir) => {
      const nav = navigate(dir, row, cell);

      if (nav.cell === null || nav.row === null) return null;
        
      if (value[row][cell] === value[nav.row][nav.cell]) {
        console.log(dir);
        const next = navigate(dir, nav.row, nav.cell);

        if (next.cell === null || next.row === null) {
            
          const back_check = navigate(back_nav(dir), row, cell);

          if (back_check.cell === null || back_check.row === null) {
            return null;
          } else if (value[row][cell] === value[back_check.row][back_check.cell]){
              console.log(value[nav.row][nav.cell] + " pabedil");
          }
          return null;
        }

        if (value[nav.row][nav.cell] === value[next.row][next.cell]) {
          console.log(value[nav.row][nav.cell] + " pabedil");
        }
        
      }
    });
  };
