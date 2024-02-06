import React from 'react'
import { BellowCardPart, Fraction, HrTag, ImageTag, MainWrpr, Name, SemiHeading, UpperCardPart } from './index.sc'
import GoldMedal from '../../Assets/Images/SVGs/goldMedal.svg';
import SilverMedal from '../../Assets/Images/SVGs/silverMedal.svg';
import BronzMedal from '../../Assets/Images/SVGs/bronzMedal.svg'

export default function EmployeeRankCard({marks, name, department, staffCode, medalName = 'gold'}) {
  return (
    <MainWrpr>
      <UpperCardPart>
        {medalName === 'gold' ? (
            <ImageTag src={GoldMedal}/> 
        ) : medalName === 'silver' ? (
            <ImageTag src={SilverMedal}/>
        ) : (
            <ImageTag src={BronzMedal}/>
        )}
        <Fraction>{`${marks}/5`}</Fraction>
      </UpperCardPart>
      <BellowCardPart>
        <Name>{name}</Name>
        <HrTag/>
        <SemiHeading>
            Department: <span>{department}</span>
        </SemiHeading>
        <SemiHeading>
            Staff Code: <span>{staffCode}</span>
        </SemiHeading>
      </BellowCardPart>
    </MainWrpr>
  )
}
