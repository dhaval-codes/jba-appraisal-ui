import React, {useState} from 'react'
import ApplicationHeader from '../../Components/Header'
import { AddUserForm, ContainerWrpr, ContentWrpr, FormBtnCont, FormLabel, Header, HeaderWrpr, InputBox, MainCont, MainWrpr, PageWrpr, SectionWrpr, SelectBox, Sidebar, SubmitButton } from './index.sc'
import CrossIcon from '../../Assets/Images/SVGs/Cross.svg'
import FormButton from '../../Components/FormButton'

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

const newUserArray = [
    {
        label: "Employee Name:",
        placeholder: "Enter new employee's name",
        type: "inputBox"
    },
    {
        label: "Select Role for the Employee:",
        options: ["select role", "teacher", "HOD", "Co-ordinator", "Admin"],
        type: "roleDropdown"
    },
    {
        label: "Enter Employee's Staff Code:",
        placeholder: "i.e. 404",
        type: "inputBox"
    },
    {
        label: "Select Employee's Department:",
        options: ["select department", "english", "hindi", "maths", "science", "cs", "commerce", "humanities", "psycology", "pe", "perArts", "lib", "office", "senior", "junior", "other"],
        type: "deptDropdown"
    },
    {
        label: "Initialise with a dummy password:",
        placeholder: "i.e. Hey@123",
        type: 'inputBox'
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
                                <>
                                    <AddUserForm>
                                        {newUserArray.map((item, index)=>(
                                            <SectionWrpr key={index}>
                                                {item.type === 'inputBox' ? (
                                                    <>
                                                        <FormLabel>{item.label}</FormLabel>
                                                        <InputBox placeholder={item.placeholder}/>
                                                    </>
                                                ) : item.type === 'roleDropdown' ? (
                                                    <>
                                                        <FormLabel>{item.label}</FormLabel>
                                                        <SelectBox>
                                                            {item.options.map((firstItem,i)=>(
                                                                <option key={i}>{firstItem}</option>
                                                            ))}    
                                                        </SelectBox>
                                                    </>
                                                ) : item.type === 'deptDropdown' ?(
                                                    <>
                                                        <FormLabel>{item.label}</FormLabel>
                                                        <SelectBox>
                                                            {item.options.map((secItem,j)=>(
                                                                <option key={j}>{secItem}</option>
                                                            ))}
                                                        </SelectBox>
                                                    </>
                                                ) : (<></>)}
                                            </SectionWrpr>
                                        ))}
                                    </AddUserForm>
                                    <SubmitButton>Create Employee Profile</SubmitButton>
                                </>
                            ) : activeHeading === 'Update Eployee Profile' ? (
                                <></>
                            ) : (<></>)}
                        </ContentWrpr>
                    </ContainerWrpr>
                )}
            </MainCont>
        </MainWrpr>
    </PageWrpr>
  )
}
