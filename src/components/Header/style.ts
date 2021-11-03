import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--grey-0);
  padding: 10px 18px;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  h2 {
    color: var(--grey-600);
    span {
      font-size: 18px;
      color: var(--secondary);
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  > :nth-child(1n + 2) {
    cursor: pointer;
  }
`;

export const CartIconContainer = styled.div`
  position: relative;
`;

export const CartCount = styled.div`
  width: 18px;
  height: 22px;
  border-radius: 7px;
  position: absolute;
  color: #ffffff;
  background-color: var(--primary);
  top: -13px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 106px;
  z-index: 2;
  width: 20px;
  overflow: hidden;
  transition-duration: 0.35s;
  > :last-child {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.1s;
    > :first-child {
      transition-duration: 0.1s;
    }
  }
  input {
    position: absolute;
    width: 80%;
    opacity: 0;
    border: none;
    height: 100%;
    outline: none;
    transition-duration: 0.2s;
    background-color: transparent;
  }
  :focus-within {
    top: 10px;
    right: 50%;
    transform: translateX(50%);
    height: 50px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid var(--grey-600);
    width: calc(100% - 20px);
    z-index: 2;
    background-color: #ffffff;
    transition-duration: 0.4s;
    > :last-child {
      width: 53px;
      height: 40px;
      background-color: var(--primary);
      border-radius: 8px;
      > :first-child {
        color: #ffffff;
      }
    }

    input {
      opacity: 1;
    }
  }
  @media (min-width: 768px) {
    border: 2px solid var(--grey-100);
    position: static;
    width: 350px;
    height: 50px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    transition-duration: 0.1s;

    > :last-child {
      width: 53px;
      height: 40px;
      background-color: var(--primary);
      border-radius: 8px;
      cursor: pointer;
      > :first-child {
        color: #ffffff;
      }
      :hover {
        background-color: #93d7af;
      }
    }

    input {
      position: static;
      width: auto;
      opacity: 1;
      background-color: transparent;
      width: 270px;
    }
    :focus-within {
      position: static;
      transform: none;
      width: 350px;
    }
  }
`;
