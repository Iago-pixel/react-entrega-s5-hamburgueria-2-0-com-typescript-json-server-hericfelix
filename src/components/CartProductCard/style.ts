import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #bdbdbd;
  font-size: 18px;
  > div {
    display: flex;
    gap: 10px;
    figure {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--grey-100);
      border-radius: 5px;
      img {
        max-width: 100%;
        max-height: 90%;
      }
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      h3 {
        color: var(--grey-600);
      }
    }
  }
  > :last-child {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  height: 34px;
  width: 106px;
  border: 2px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  button {
    height: 100%;
    width: 30px;
    color: var(--secondary);
    background-color: #f2f2f2;
    text-align: center;
    border: none;
    cursor: pointer;
  }
  p {
    height: 100%;
    font-size: 14px;
    line-height: 34px;
    color: var(--grey-600);
    width: auto;
    text-align: center;
  }
`;
