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

export const SegmentWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
`;

export const InputBox = styled.input`
    width: 100%;
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


export const SelectBox = styled.select`
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid #BCBCBC;
    height: 2.5rem;
    padding: 0.25rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    text-transform: capitalize;
    &:focus{
        outline: none;
        border: 2px solid #312B8B;
    }

    option{
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

export const SuccessWrpr = styled.img`
    height: 20rem;
    width: 20rem;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    background-color: #fff;
    border: 3px solid #d9d9d9;
    border-radius: 0.6125rem;
    padding: 2rem;
`;

export const ErrorWrpr = styled.div`
    height: 10rem;
    width: 20rem;
    background-color: #fff;
    border: 3px solid #d9d9d9;
    border-radius: 0.6125rem;
    position: absolute;
    font-size: 1.25rem;
    font-weight: 600;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;