import React from 'react'
import { MainWrpr } from './index.sc'
import FormCViewer from '../../Components/PeerAppraisalFormCViewer'

export default function TestPage() {
  return (
    <MainWrpr>
      <FormCViewer
        selectedName={'Dhaval'}
      />
    </MainWrpr>
  )
}
