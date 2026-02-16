'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { EmptyState } from './empty-state'
import { ArrowUp, ArrowDown, ArrowUpDown, Inbox } from 'lucide-react'

export interface Column<T> {
  key: string
  header: string
  sortable?: boolean
  className?: string
  render?: (row: T) => React.ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  loading?: boolean
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  onSort?: (column: string) => void
  onRowClick?: (row: T) => void
  emptyIcon?: React.ReactNode
  emptyTitle?: string
  emptyDescription?: string
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  loading = false,
  sortColumn,
  sortDirection,
  onSort,
  onRowClick,
  emptyIcon,
  emptyTitle = 'No data',
  emptyDescription,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col.key} className={col.className}>
                  {col.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                {columns.map((col) => (
                  <TableCell key={col.key} className={col.className}>
                    <Skeleton className="h-4 w-3/4" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="rounded-md border">
        <EmptyState
          icon={emptyIcon || <Inbox className="h-5 w-5" />}
          title={emptyTitle}
          description={emptyDescription}
        />
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.key} className={col.className}>
                {col.sortable && onSort ? (
                  <button
                    type="button"
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => onSort(col.key)}
                  >
                    {col.header}
                    {sortColumn === col.key ? (
                      sortDirection === 'asc' ? (
                        <ArrowUp className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDown className="h-3.5 w-3.5" />
                      )
                    ) : (
                      <ArrowUpDown className="h-3.5 w-3.5 opacity-50" />
                    )}
                  </button>
                ) : (
                  col.header
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={onRowClick ? 'cursor-pointer' : undefined}
            >
              {columns.map((col) => (
                <TableCell key={col.key} className={col.className}>
                  {col.render
                    ? col.render(row)
                    : (row[col.key] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
