import React from "react";
import { useTable } from "react-table";
import { MarketData, MarketPriceTable } from "../../utils/TableColumns";
import styles from "../../styles/TableComponent.module.scss";

type Props = {};

const TableComponent = (props: Props) => {
  const columns = React.useMemo(() => MarketPriceTable, []);
  const data = React.useMemo(() => MarketData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className={styles.tableContainer}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                className={i % 2 !== 0 ? styles.oddRow : ""}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
