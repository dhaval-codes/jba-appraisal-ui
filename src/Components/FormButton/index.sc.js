import styled from "styled-components";

export const MainCont = styled.div`
    height: 3.75rem;
    width: 100%;
    background-color: ${(prop)=>prop.bg === 'selected' ? '#312B8B' : '#fff'};
    border-radius: 0.625rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    cursor: pointer;
    box-shadow: -6px 6px 11.7px 3px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        height: 2.75rem;
    }
`;

export const ContainerSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;

export const Title = styled.h3`
    color: ${(props)=> props.color === 'selected' ? '#fff' : '#000'};
    font-size: 1.5rem;
    margin: 0;
    font-weight: 600;
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        font-size: 1rem;
    }
`;

export const StatusCircle = styled.div`
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    background-color: ${(props)=>props.status === 'Employee' ? '#10CD00' : props.status === 'HOD' ? '#FAFF00' : props.status === 'Students' ? '#F00' : props.status === 'Co-ordinator' ? "#00B9B9" : props.status === 'Admin' ? '#C57BFF' : 'none'};
`;

export const PercentageText = styled.h4`
    margin: 0;
    font-size: 1rem;
    color: ${(props)=> props.color === 'selected' ? '#fff' : '#000'};
    font-weight: 400;
`;