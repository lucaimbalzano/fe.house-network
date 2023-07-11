'use client'

import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Cards from './Cards'
import Table from '@/components/Table'
import './dashboard.css' 

import PageScrape from './pageScrape/pageScrape'
 
export default function DashboardPage() {
  return (
    <div className='pt-10 pl-5 pr-5'>
     <PageScrape />
    <div className='flex justify-between;'>
      {/* <Cards /> */}
      </div>
      <div className="flex flex-col w-full dashboard-table mt-8">
      {/* <Table /> */}
    </div>
    </div>
  )
}
