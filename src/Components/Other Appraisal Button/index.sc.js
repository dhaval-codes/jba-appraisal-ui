import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 3.75rem;
    width: 100%;
    background-color: #fff;
    border-radius: 0.625rem;
    border: 3px solid #312B8B;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    &:hover{
        background: linear-gradient(270deg, #312B8B 0%, #000 100%);
        border: none;

        h1 {
            color: #fff;
        }
    }
`;

export const Text = styled.h1`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    margin: 0;
`;