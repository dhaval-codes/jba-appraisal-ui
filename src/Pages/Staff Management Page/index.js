import React, {useState} from 'react'
import ApplicationHeader from '../../Components/Header'
import { ContainerWrpr, ContentWrpr, FormBtnCont, Header, HeaderWrpr, MainCont, MainWrpr, PageWrpr, Sidebar} from './index.sc'
import CrossIcon from '../../Assets/Images/SVGs/Cross.svg'
import FormButton from '../../Components/FormButton'
import AddUserComponent from './adduserComponent'
import UpdateUserComponent from './updateUserComponent'
import DeleteUserComponent from './deleteUserComponent'

const buttonMappingArray = [
    {
        label: 'Add Employee Profile',
    },
    {
        label: 'Update Eployee Profile',
    },
    {
        label: 'Delete Employee Profile',
    }
]

export default function StaffManagementPage() {
    const [selected, setSelected] = useState('')
    const [showDynamicComp, setShowDynamicComp] = useState(false)
    const [activeHeading, setActiveHeading] = useState('')

    const formButtonClick = (i, text) => {
        if (selected === i) {
          setSelected('');
          setShowDynamicComp(false)
          setActiveHeading('')
        } else {
          setSelected(i);
          setShowDynamicComp(true);
          setActiveHeading(text)
        }
    }

    const CrossIconFunction = () => {
        setShowDynamicComp(false);
        setSelected('');
    }

  return (
    <PageWrpr>
        <ApplicationHeader/>
        <MainWrpr>
            <Sidebar>
                <FormBtnCont>
                    {buttonMappingArray.map((item,index)=>(
                        <FormButton
                            key={index}
                            title={item.label}
                            showFormIcon={false}
                            clicked={selected === index ? 'selected' : ''}
                            onClick={()=>formButtonClick(index, item.label)}
                        />
                    ))}
                </FormBtnCont>
            </Sidebar>
            <MainCont>
                {showDynamicComp && (
                    <ContainerWrpr>
                        <HeaderWrpr>
                            <Header>{activeHeading}</Header>
                            <img 
                                style={{height: '1.5rem', width: '1.5rem', cursor: 'pointer'}}
                                src={CrossIcon}
                                alt=''
                                onClick={CrossIconFunction}
                            />
                        </HeaderWrpr>
                        <ContentWrpr>
                            {activeHeading === 'Add Employee Profile' ? (
                                <AddUserComponent/>
                            ) : activeHeading === 'Update Eployee Profile' ? (
                                <UpdateUserComponent/>
                            ) : (<DeleteUserComponent/>)}
                        </ContentWrpr>
                    </ContainerWrpr>
                )}
            </MainCont>
        </MainWrpr>
    </PageWrpr>
  )
}



