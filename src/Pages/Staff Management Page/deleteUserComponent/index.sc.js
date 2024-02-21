import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    .div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const FormWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SegmentWrprOne = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d9d9d9;
`;

export const FormLabel = styled.label`
    font-size: 1.25rem;
    font-weight: 600;
    color: #000;
`;

export const InputBoxOne = styled.input`
    width: 50%;
    border-radius: 0.25rem;
    border: 1px solid #BCBCBC;
    height: 2.5rem;
    padding: 0.25rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    &:focus{
        outline: none;
        border: 2px solid #312B8B;
    }
`;

export const SubmitButtonOne = styled.button`
    border: none;
    border-radius: 0.25rem;
    height: 2.5rem;
    width: auto;
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

export const MySegment = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    color: #000;
    font-weight: 600;

    span{
        font-size: 1.25rem;
        font-weight: 400;
        text-transform: capitalize;
    }
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
