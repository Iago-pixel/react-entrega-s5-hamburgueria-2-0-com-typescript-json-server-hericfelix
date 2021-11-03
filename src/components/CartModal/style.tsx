import styled from "styled-components";

export const Container = styled.div`
  background: rgba(51, 51, 51, 0.5);
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  > div {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    max-width: 90%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 13px 22px;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary);
  color: #ffffff;
  p {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: auto;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;

export const EmptyCart = styled.div`
  h3 {
    color: var(--grey-600);
    margin-bottom: 10px;
  }
  p {
    color: var(--grey-300);
    font-size: 14px;
    text-align: center;
  }
`;

export const Cart = styled.div`
  width: 100%;

  > div:last-child {
    border-top: 2px solid var(--grey-100);
    width: 100%;
    margin-top: 20px;
    > div:first-child {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 20px 0;
      p {
        color: var(--grey-600);
        font-weight: 600;
        font-size: 14px;
      }
      p:last-child {
        color: var(--grey-300);
      }
    }
  }
  > div:first-child {
    max-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    overflow-y: auto;
  }
`;
