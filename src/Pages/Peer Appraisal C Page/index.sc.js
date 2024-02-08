import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainWrpr = styled.div`
    height: calc(100% - 5.563rem);
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

export const SideBar = styled.div`
    height: 100%;
    width: 100%;
    background-color: #bcbcbc;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
`;

export const SemiHeading = styled.h2`
    font-size: 1.125rem;
    color: #000;
    font-weight: 700;
    margin: 0;
`;

export const ScrolableContainer = styled.div`
    height: 45rem;
    width: 100%;
    overflow-y: auto;
    border: none;
    border-radius: 0.25rem;
    ::-webkit-scrollbar {
        display: none;
        width: 0;
    }
    scrollbar-width: none;
`;