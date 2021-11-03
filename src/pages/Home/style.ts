import styled, { keyframes } from "styled-components";

const AppearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px)
  }
  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const Container = styled.div`
  width: auto;
  padding: 25px 25px;
  overflow: scroll;
  display: flex;
  gap: 20px;
  animation: ${AppearFromBottom} 0.5s ease-in;

  > div {
    flex-shrink: 0;
  }
`;
