import styled from "styled-components";

export const PageWrpr = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const MainWrpr = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 5.625rem;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TableWrpr = styled.div`
    height: 80%;
    width: 100%;
    border: 1px solid black;
    margin-top: 5.625rem;
    border-radius: 0.6125rem;
`;

export const HeaderWrpr = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 3rem;
    background-color: #d9d9d9;
    border-radius: 0.6125rem 0.6125rem 0rem 0rem;
    grid-gap: 0.25rem;
    padding: 0.25rem;
`;

export const Headings = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
`;

export const ScrollWrpr = styled.div`
    height: calc(100% - 3rem);
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    border-radius: 0rem 0rem 0.6125rem 0.6125rem;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const RowItemWrpr = styled.div`
    /* height: 100%; */
    width: 100%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1.5rem;
    &:hover{
        background-color: #d5d5d5;
    }
`;

export const RowItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    font-weight: 400;
    height: 100%;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    height: 2.5rem;
    width: 100%;
    background-color: #312B8B;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        border: 1px solid #BCBCBC;
        color: #312B8B;
        transition: all ease-in-out 0.5s;
    }
`;