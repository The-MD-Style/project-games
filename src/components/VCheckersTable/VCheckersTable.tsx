import React, { useState } from "react";
import classes from "./VCheckersTable.module.scss";
import { log } from "console";

type Props = {};
const TableCheckers: React.FC<Props> = (props: Props) => {
  const default_table = [
    [
      undefined,
      "white",
      undefined,
      "white",
      undefined,
      "white",
      undefined,
      "white",
    ],
    [
      "white",
      undefined,
      "white",
      undefined,
      "white",
      undefined,
      "white",
      undefined,
    ],
    [
      undefined,
      "white",
      undefined,
      "white",
      undefined,
      "white",
      undefined,
      "white",
    ],
    [null, undefined, null, undefined, null, undefined, null, undefined],
    [undefined, null, undefined, null, undefined, null, undefined, null],
    [
      "black",
      undefined,
      "black",
      undefined,
      "black",
      undefined,
      "black",
      undefined,
    ],
    [
      undefined,
      "black",
      undefined,
      "black",
      undefined,
      "black",
      undefined,
      "black",
    ],
    [
      "black",
      undefined,
      "black",
      undefined,
      "black",
      undefined,
      "black",
      undefined,
    ],
  ];

  const [Table, setTable] = useState(default_table);
  const [SelectedHuinea, setSelectedHuinea] = useState<{
    row: number;
    cell: number;
  } | null>(null);

  const styleHandler = (row: number, cell: number): string => {
    if (!(row % 2)) {
      return cell % 2 ? "" : "green";
    } else {
      return !(cell % 2) ? "" : "green";
    }
  };

  const huineaHandler = (row: number, cell: number) => {
    if (!SelectedHuinea) {
      setSelectedHuinea({ row, cell });
    } else {
      let copy = [...Table];
      copy[row][cell] = Table[SelectedHuinea.row][SelectedHuinea.cell];
      copy[SelectedHuinea.row][SelectedHuinea.cell] = null;
      setSelectedHuinea(null);
      setTable(copy);
    }
  };

  return (
    <table className={classes["table"]}>
      <tbody>
        {Table.map((value, rowIndex: number) => (
          <tr className={classes["row"]} key={"row " + rowIndex}>
            {value.map(
              (row_element: string | null | undefined, cellIndex: number) => (
                <td
                  key={"cell " + cellIndex}
                  className={`${classes["cell"]} ${
                    classes[`${styleHandler(rowIndex, cellIndex)}`]
                  }`}
                  onClick={() => huineaHandler(rowIndex, cellIndex)}
                >
                  <div
                    className={`${classes[`${row_element}`]} ${
                      SelectedHuinea?.row === rowIndex &&
                      SelectedHuinea?.cell === cellIndex &&
                      row_element
                        ? classes["isSelected"]
                        : ""
                    }`}
                  >
                    .
                  </div>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCheckers;
