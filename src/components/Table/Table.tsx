"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatNumber } from "@/utils/number";
import { shortAddressTable } from "@/utils/address"
import shareIcon from "@/images/landing_page/Square Share Line.svg"
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import PaginationCustom from "../pagination/pagination";
const data: Payment[] = [
  {
    rank: 1,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 2,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 3,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 4,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 5,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 6,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 7,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 8,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 9,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 10,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
  {
    rank: 11,
    walletAddress: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    percent: 4.25,
    amount: 422638596369,
    exp: "adasd",
    value: 15
  },
]

export type Payment = {
  rank: number
  walletAddress: string,
  percent: number,
  amount: number
  value: number
  exp: string
}

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "rank",
    header: () => {
      return (
        <div className="text-center">Rank</div>
      )
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("rank")}</div>
    ),
  },
  {
    accessorKey: "walletAddress",
    header: () => {
      return (
        <div>Wallet Address</div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-[#8CE339] flex items-center gap-3 w-[260px]">
      <span>{shortAddressTable(row.getValue("walletAddress"))}</span>
      <Copy className="text-[#525866]" />
    </div>,
  },
  {
    accessorKey: "percent",
    header: () => <div>%</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("percent")}%</div>
    },
  },
  {
    accessorKey: "amount",
    header: () => <div>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="font-medium">{formatNumber(row.getValue("amount"))}</div>
    },
  },
  {
    accessorKey: "value",
    header: () => <div>Value</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("value")}</div>
    },

  },
  {
    accessorKey: "exp",
    header: () => <div>Exp</div>,
    cell: ({ row }) => {
      return (
        <Link href={row.getValue("exp")}>
          <Image src={shareIcon} alt="icon" width={50} height={50} className="w-auto h-auto" />
        </Link>
      )
    },

  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pageSize, setPageSize] = React.useState(10)
  const [pageIndex, setPageIndex] = React.useState(0)  // Add this
  console.log("🚀 ~ DataTableDemo ~ pageIndex:", pageIndex)
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageSize,
        pageIndex, // Use the state variable
      },
    },
    onPaginationChange: setState => {  // Add this handler
      if (typeof setState === 'function') {
        const result = setState({
          pageIndex,
          pageSize,
        })
        setPageIndex(result.pageIndex)
        setPageSize(result.pageSize)
      }
    },
  })
  const handleChange = (page: number) => {
    setPageIndex(page);
  };
  return (
    <div className="w-full mt-6">

      <div className="border-[1px] border-white/5 rounded-2xl overflow-hidden">
        <Table className="">
          <TableHeader className="h-[56px] bg-white/5 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white font-bold py-[18px]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-white/5">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-3 py-[18px]">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="items-center justify-end space-x-2 py-4 hidden sm:flex">
        <div className="flex-1 text-sm text-muted-foreground flex items-center gap-4 text-white">
          <span>Show: </span>
          <Select value={pageSize.toString()}
            onValueChange={(value) => {
              setPageSize(Number(value));
              table.setPageSize(Number(value));
            }}>
            <SelectTrigger className="w-[65px] text-white">
              <SelectValue placeholder="Limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
          <span>Records</span>
          {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected. */}
        </div>
        <div className="space-x-2">
          <div className="flex items-center gap-4 text-sm">
            <span>Show: </span>
            <Button onClick={() => table.setPageIndex(0)} className="px-3 py-[6px] bg-white/4 border-[1px] border-white/5 rounded-md h-8 min-w-[50px]">First</Button>
            <Button className="px-3 py-[6px] bg-white/4 border-[1px] border-white/5 rounded-md h-8 min-w-[50px]" onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              <ChevronLeft />
            </Button>
            <div className="px-3 py-[6px] bg-white/4 border-[1px] border-white/5 rounded-md h-8 min-w-[50px]">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </div>
            <Button className="px-3 py-[6px] bg-white/4 border-[1px] border-white/5 rounded-md h-8 min-w-[50px]" onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              <ChevronRight />
            </Button>
            <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="px-3 py-[6px] bg-white/4 border-[1px] border-white/5 rounded-md h-8 min-w-[50px]">Last</Button>
          </div>
        </div>
      </div>
      <div className="sm:hidden block mt-6">
        <PaginationCustom
          onPageChange={handleChange}
          totalCount={data.length}
          pageSize={pageSize}
          siblingCount={1}
          currentPage={pageIndex}
        />
      </div>
    </div>
  )
}
