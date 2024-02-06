import React from 'react'
import { MainWrpr, TestRow } from './index.sc'
import EmployeeRankCard from '../../Components/EmployeeCard'


export default function TestPage() {
  return (
    <MainWrpr>
      <TestRow>
        <EmployeeRankCard/>
      </TestRow>
    </MainWrpr>
  )
}
