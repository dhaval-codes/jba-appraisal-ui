import React from 'react'
import { MainWrpr, TestRow } from './index.sc'
import EmployeeRankCard from '../../Components/EmployeeCard'


export default function TestPage() {
  return (
    <MainWrpr>
      <TestRow>
        <EmployeeRankCard
          marks={4.78}
          name={'Amit Kumar Upaddhyay'}
          department={'CS'}
          staffCode={893}
          medalName={'gold'}
        />
      </TestRow>
    </MainWrpr>
  )
}
