import { TableConfig, TableOptions } from "@/app/types";
import { useCreateAtom } from "@tanstack/react-store";
import {
  tableFeatures,
  useTable,
  rowSelectionFeature,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  RowData,
  RowSelectionState,
  TableFeatures,
} from "@tanstack/react-table";
import { useMemo } from "react";
import Cell from "./Cell";

interface TableProps<TData extends RowData> {
  getTableConfig: () => TableConfig<TData>;
  getRowKey?: () => string;
}

const Table = <TData extends RowData>({
  getTableConfig,
  getRowKey,
}: TableProps<TData>) => {
  const { rowData, bodyConfig, options } = getTableConfig();

  const rowSelectionAtom = useCreateAtom<RowSelectionState>({});

  const tableOptions = useMemo(() => {
    if (!options) return;
    const tableOptionsObj: TableFeatures = {};
    if (options[TableOptions.ENABLE_ROW_SELECTION]) {
      tableOptionsObj.rowSelectionFeature = rowSelectionFeature;
    }
    return tableOptionsObj;
  }, [options]);

  const columns: ColumnDef<TableFeatures, TData>[] = useMemo(() => {
  if (!options?.[TableOptions.ENABLE_ROW_SELECTION]) {
    return bodyConfig;
  }

  return [Cell(), ...bodyConfig ];
}, [options, bodyConfig]);

  const table = useTable({
    features: tableFeatures({ ...tableOptions }),
    data: rowData,
    columns: columns,
    ...(getRowKey && {
      getRowId: getRowKey,
    }),
    atoms: {
      rowSelection: rowSelectionAtom, // selection APIs now update rowSelectionAtom
    },
  });
  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <table.FlexRender header={header} />
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getAllCells().map((cell) => (
              <td key={cell.id}>
                <table.FlexRender cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
