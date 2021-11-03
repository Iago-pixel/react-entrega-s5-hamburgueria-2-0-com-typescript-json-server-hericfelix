import styled from "styled-components";

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  border: 2px solid
    ${(props) => (props.isFocused ? "var(--primary)" : "var(--grey-100)")};
  box-sizing: border-box;
  border-radius: 5px;
  transition-duration: 0.25s;
  transform: scale(${(props) => (props.isFocused ? "1.1" : "1")});
  figure {
    text-align: center;
    width: 100%;
    height: 150px;
    background: #f5f5f5;
    padding: 15px 0;
    img {
      max-height: 120px;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 20px;
    padding-top: 25px;
    width: 100%;
    align-items: flex-start;
    flex-grow: 0;
    h3 {
      color: var(--grey-600);
    }
    p:first-child {
      font-size: 12px;
      color: var(--grey-300);
    }
    p:last-of-type {
      font-size: 14px;
      color: var(--primary);
      font-weight: 600;
    }
  }
`;
