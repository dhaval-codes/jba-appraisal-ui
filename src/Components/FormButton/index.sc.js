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
`;