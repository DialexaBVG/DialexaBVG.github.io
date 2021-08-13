import styled, { keyframes } from 'styled-components';
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(214, 176, 100, 0.35);
  }
  80% {
    box-shadow: 0 0 0 160px rgba(214, 176, 100, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(214, 176, 100, 0);
  }
`;

export const Pulse = styled.div`
    position: absolute;
    margin: auto;
    height: 10px;
    width: 10px;
    border-radius: 100px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    animation: ${pulseAnimation} 2s infinite;
    &:after {
        content: '';
        position: absolute;
        height: 40px;
        width: 68px;
        margin: auto;
        top: 0;
        bottom: -15px;
        right: 0;
        left: -29px;
        z-index: -1;
    }
`;

export default Pulse;
