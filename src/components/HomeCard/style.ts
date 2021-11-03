import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 377px;

  h1 {
    margin: 20px 0;
    color: var(--grey-600);
    span {
      font-size: 18px;
      color: var(--secondary);
    }
  }
  > div:nth-child(2) {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    color: var(--grey-300);
    padding: 15px;
    gap: 20px;
    p {
      font-size: 14px;
    }
    strong {
      color: var(--grey-600);
    }
  }
`;

export const IconBox = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: rgba(39, 174, 96, 0.1);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
`;

export const BallsContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
    width: 175px;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--grey-100);
    }
  }
`;
