import styled from "styled-components";

export const MainContainer = styled.div`
    height: calc(100vh - 5.563rem);
    width: 100%;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

export const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
`;

export const Facts = styled.h3`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
`;
