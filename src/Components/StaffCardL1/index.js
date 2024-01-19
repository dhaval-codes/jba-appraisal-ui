import React from 'react'
import { Department, MainWrpr, Name, StaffNumber } from './index.sc'

export default function StaffCardL1({name, department, staffNumber, clicked, onClick}) {

  const handleClick = () =>{
    onClick();
  }

  return (
    <MainWrpr bg={clicked} onClick={handleClick}>
      <Name bg={clicked}>{name}</Name>
      {department ? (
        <Department bg={clicked}>{department}</Department>
      ) : (
        <StaffNumber bg={clicked}>{staffNumber}</StaffNumber>
      )}
    </MainWrpr>
  )
}
