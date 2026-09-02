import { tableFeatures, useTable } from "@tanstack/react-table";
import type { ColumnDef, RowData, TableFeatures } from "@tanstack/react-table";

interface TableConfig<TData extends RowData> {
  rowData: TData[];
  bodyConfig: ColumnDef<TableFeatures, TData>[];
}

interface TableProps<TData extends RowData> {
  getTableConfig: () => TableConfig<TData>;
}

const Table = <TData extends RowData,>({ getTableConfig }: TableProps<TData>) => {
  const { rowData, bodyConfig } = getTableConfig();
  const table = useTable({
    features: tableFeatures({}),
    data: rowData,
    columns: bodyConfig,
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
