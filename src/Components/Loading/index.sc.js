import styled, {keyframes} from "styled-components";

export const AnimationWrpr = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const loadingKeyFrame = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    border-radius:50%;
    width:2.5rem;
    height: 2.5rem;
    position: relative;
    border-top:0.5em solid #D9D9D9;
    border-right: 0.5rem solid #D9D9D9;
    border-bottom: 0.5rem solid #D9D9D9;
    border-left: 0.5rem solid #312B8B;
    transform: translateZ(0);
    animation: ${loadingKeyFrame} 1.1s infinite linear;
`;