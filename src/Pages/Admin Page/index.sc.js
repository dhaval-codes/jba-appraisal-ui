import styled from "styled-components";

export const MainWrpr = styled.div`
    width: 100%;
    height: calc(100% - 3.5rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
    grid-gap: 0.5rem;
`;

export const LeftWrpr = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Heading = styled.h1`
    font-size: 1.125rem;
    margin: 0;
`;

export const RightWrpr = styled.div`
    height: 100%;
    width: 100%;
    padding: 0.5rem;
`;

export const StaffListWrpr = styled.div`
    height: calc(100vh - 9rem);
    width: 100%;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.6125rem;
`;