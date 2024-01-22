import React,{useState, useEffect} from 'react'
import { ChangePasswordButton, ContainerWrpr, DisplayPictureWrpr, Heading, MainWrpr, NameText, ProfileImage, ProfilePicture, ProfileTooltipWrpr, ProfileWrpr, Samosa } from './index.sc'
import { ReactComponent as Logo } from '../../Assets/Images/SVGs/header-logo.svg'

export default function ApplicationHeader() {
  const [loginName, setLoginName]=useState('')
  const [role, setRole]=useState('')
  const [showProfile, setShowProfile] = useState(false)

  const showFunc = () => {
    setShowProfile(!showProfile)
  }

  useEffect(()=>{
    setLoginName(window.sessionStorage.getItem('name'))
    setRole(window.sessionStorage.getItem('role'))
  },[])

  return (
    <MainWrpr>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem'}}>
        <Logo/>
        <Heading>{`Welcome ${loginName}`}</Heading>
      </div>
        <ProfileImage src='https://i.redd.it/images-of-lord-ram-and-princess-sita-created-using-v0-ynrenz32csya1.png?width=1024&format=png&auto=webp&s=955ed6cd2f184b16fddd843d787561458aa94387' onClick={showFunc}/>
        {showProfile && (
          <ProfileTooltipWrpr>
            <Samosa/>
            <ProfileWrpr>
              <DisplayPictureWrpr>
                <ProfilePicture src='https://i.redd.it/images-of-lord-ram-and-princess-sita-created-using-v0-ynrenz32csya1.png?width=1024&format=png&auto=webp&s=955ed6cd2f184b16fddd843d787561458aa94387'/>
              </DisplayPictureWrpr>
              <ContainerWrpr>
                <NameText>Name: <span>{loginName}</span></NameText>
                <NameText>Role: <span>{role}</span></NameText>
                <ChangePasswordButton>Change Password</ChangePasswordButton>
              </ContainerWrpr>
            </ProfileWrpr>
          </ProfileTooltipWrpr>
        )}
    </MainWrpr>
  )
}
