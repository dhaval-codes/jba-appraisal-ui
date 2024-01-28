import React from 'react'
import { MainWrpr } from './index.sc'
import Buffer from '../../Assets/Gifs/loading-buffering.gif';

export default function TestPage() {
  return (
    <MainWrpr>
      <img src={Buffer} alt="Loading Buffer" style={{height: '20px', width: '20px'}}/>
    </MainWrpr>
  )
}
