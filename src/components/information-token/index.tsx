"use client"
import React from 'react'
import { DataTableDemo } from "@/components/Table/Table"
import FormTabTrade from '../form-trade/tab'
import { useSearchParams } from 'next/navigation'
const InformationToken = () => {
  const menu = [
    {
      id: 1,
      title: "Holder",
      value: "holder",
    },
    {
      id: 2,
      title: "Transactions",
      value: "transactions",
    },
    {
      id: 3,
      title: "My Holdings",
      value: "holdings",
    },
    {
      id: 4,
      title: "Top Traders",
      value: "trader",
    },
    {
      id: 4,
      title: "Bubblemaps",
      value: "bubblemaps",
    },
  ];
  const pathName = useSearchParams()
  const tab = pathName.get('table');
  return (
    <main className='text-white mt-10'>
     <div className="w-full overflow-x-auto">
        <FormTabTrade tab={String(tab)} menu={menu} titleTab="table" />
      </div>
        <DataTableDemo />
    </main>
  )
}

export default InformationToken