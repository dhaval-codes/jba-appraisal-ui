import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    position: relative;
`;

export const ContWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #fff;
`;

export const Label = styled.label`
    font-size: 1.125rem;
    font-weight: 600;
    color: #000;
    margin: 0;
`;

export const TextArea = styled.textarea`
    height: 10rem;
    width: 100%;
    border-radius: 0.5rem;
    font-size: 0.8125rem;
    resize: none;
    overflow-y: auto;
`;

export const InputTime = styled.input`
    width: 100%;
    height: auto;
`;