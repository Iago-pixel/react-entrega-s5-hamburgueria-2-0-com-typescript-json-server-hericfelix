import styled, { keyframes } from "styled-components";

const AppearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px)
  }
  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const Container = styled.div`
  margin: 0px 18px;
  animation: ${AppearFromTop} 0.75s ease-in;

  @media (min-width: 768px) {
    margin: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 62px;
    box-sizing: border-box;
  }
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid var(--grey-0);
  margin-top: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
