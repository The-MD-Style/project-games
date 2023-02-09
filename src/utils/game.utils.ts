import { ICoordinates } from "@/models/navigate.model";
import { IGameTable } from "../models/table.model";
import { back_nav, directions, navigate } from "./navigate.utils";

const IsOutOfBox = (coordinates:ICoordinates):boolean => coordinates.cell === null || coordinates.row === null;

export const winFunction = (value: IGameTable[][], row: number, cell: number) => {

    directions.map((dir) => {
      const nav = navigate(dir, row, cell);

      if (IsOutOfBox(nav)) return null;
      // if (nav.cell === null || nav.row === null) return null;

      if (value[row][cell] === value[nav.row][nav.cell]) {
        const next = navigate(dir, nav.row, nav.cell);

        if (IsOutOfBox(next)) {
            
          const back_check = navigate(back_nav(dir), row, cell);

          if (IsOutOfBox(back_check)) {
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
