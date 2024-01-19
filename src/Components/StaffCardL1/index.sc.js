import styled from "styled-components";

export const MainWrpr = styled.div`
    height: 2.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=>props.bg === "clicked" ? "#312B8B" : "#fff"};
    padding: 0.25rem;
    cursor: pointer;

    &:hover{
        background: linear-gradient(270deg, #312B8B 0%, #000 100%);

        p{
            color: #fff;
        }

        span {
            color: #fff;
        }
    }
`;

export const Name = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props)=>props.bg === "clicked" ? "#fff" : "#000"};
`;

export const Department = styled.span`
    font-size: 0.8125rem;
    font-weight: 400;
    color: ${(props)=>props.bg === "clicked" ? "#fff" : "#000"};
    text-transform: uppercase;
`;

export const StaffNumber = styled.span`
    font-size: 0.8125rem;
    font-weight: 400;
    color: ${(props)=>props.bg === "clicked" ? "#fff" : "#000"};
`;