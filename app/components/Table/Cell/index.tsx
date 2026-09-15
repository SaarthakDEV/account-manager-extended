import Checkbox from '@mui/material/Checkbox'
import { ColumnDef, RowData, TableFeatures } from '@tanstack/react-table'
import React from 'react'

const Cell = <TData extends RowData>(): ColumnDef<TableFeatures, TData> => ({
    id: 'select-col',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={
          row.getIsSelected() ||
          (row.getCanSelectSubRows() && row.getIsAllSubRowsSelected())
        }
        disabled={!row.getCanSelect()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  })

export default Cell