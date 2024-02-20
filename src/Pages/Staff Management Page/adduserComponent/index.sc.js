import styled from "styled-components";

export const MainFormWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        height: 100%;
        justify-content: space-between;

        div{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`;

export const SectionWrpr = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: left;
    gap: 0.5rem;
`;

export const FormLabel = styled.label`
    font-size: 1rem;
    font-weight: 600;
    color: #000;
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