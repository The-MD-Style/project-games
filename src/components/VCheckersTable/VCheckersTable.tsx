import React, { useState } from "react";
import classes from "./VCheckersTable.module.scss";
import { Icons } from "../../assets/icons";
import VIcon from "../VIcon/VIcon";
type Props = {};
const TableCheckers: React.FC<Props> = (props: Props) => {
  const default_table = [
    [null, "white", null, "white", null, "white", null, "white"],
    ["white", null, "white", null, "white", null, "white", null],
    [null, "white", null, "white", null, "white", null, "white"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
  ];
  const [Table, setTable] = useState(default_table);

  const styleHandler = (row: number, cell: number): string => {
    if (!(row % 2)) {
      return row % 2 ? "" : "green";
    } else {
      return !(row % 2) ? "" : "green";
    }
  };
  return (
    <table className={classes["table"]}>
      {Table.map((value, rowIndex: number) => (
        <tr className={classes["row"]} key={"row " + rowIndex}>
          {value.map((row_element: string | null, cellIndex: number) => (
            <td
              key={"cell " + cellIndex}
              className={`${classes["cell"]} ${classes[`${styleHandler}`]}`}
            >
              {row_element}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default TableCheckers;
