import styled from "styled-components";

interface ButtonProps {
  size?: string;
  variant: string;
}

export const Container = styled.button<ButtonProps>`
  width: ${(props) => (props.size === "small" ? "auto" : "100%")};
  padding: ${(props) => (props.size === "small" ? " 10px 20px" : "20px")};
  text-align: center;
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--primary)" : "var(--grey-100)"};
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: ${(props) =>
    props.variant === "primary" ? "#ffffff" : "var(--grey-300)"};
  font-family: "Inter", sans-serif;
  font-weight: 600;

  @media (min-width: 768px) {
    cursor: pointer;
    transition-duration: 0.3s;
    :hover {
      background-color: ${(props) =>
        props.variant === "primary" ? "#93D7AF" : "var(--grey-300)"};
      color: #ffffff;
    }
  }
`;
