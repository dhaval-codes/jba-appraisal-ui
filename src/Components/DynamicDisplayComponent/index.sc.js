import styled from "styled-components";

export const MainWrpr = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #bbb;
    border-radius: 0.625rem;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.625rem 0.625rem 0rem 0rem;
    background-color: #d9d9d9;
    height: 3rem;
    padding: 0 1rem 0 1rem;
`;

export const Heading = styled.div`
    font-size: 1.25rem;
    color: #000;
    font-weight: 600;
`;

export const EmptyWrpr = styled.div`
    position: relative;
    height: calc(100% - 3rem);
    width: 100%;
    border: 0rem 0rem 0.625rem 0.625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;
    padding: 1rem;

    h1{
        font-size: 1.25rem;
        font-weight: 600;
        color: #000;
        margin: 0;
    }

    span {
        font-size: 0.8125rem;
        color: #000;
        font-weight: 300;
        margin: 0;
    }
`;