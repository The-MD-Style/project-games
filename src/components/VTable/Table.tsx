import React, { useState } from "react";
import classes from "./Table.module.scss";
import { winFunction } from "../../utils/game.utils";
import { IGameTable, default_table } from "../../models/table.model";
import VIcon from "../VIcon/VIcon";
import { Icons } from "../../assets/icons";
type Props = {
  func: () => string | null;
};
const Table: React.FC<Props> = (props: Props) => {
  const [table, setTable] = useState<IGameTable[][]>(default_table);

  const cellHandler = (row: number, cell: number) => {
    let copy = [...table];
    if (!copy[row][cell]) {
      copy[row][cell] = props.func();
      setTable(copy);
      winFunction(table, row, cell);
    }
  };

  const tableElement = (name: IGameTable): Icons => {
    switch (name) {
      case "X":
        return "X";
      case "0":
        return "O";
      default:
        return "space";
    }
  };

  return (
    <table className={classes["table"]}>
           <tbody>
        {table.map((value, rowIndex: number) => (
          <tr className={classes["row"]} key={"row " + rowIndex}>
            {value.map((row_element, cellIndex) => (
              <td
                key={"cell " + cellIndex}
                className={classes["cell"]}
                onClick={() => cellHandler(rowIndex, cellIndex)}
              >
                {row_element ? (
                  <VIcon name={tableElement(row_element)}></VIcon>
                ) : (
                  " "
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
