import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  variant?: string;
  children: ReactNode;
  isFocused?: boolean;
}

const Button = ({
  size,
  variant = "primary",
  children,
  isFocused = true,
  ...rest
}: ButtonProps) => {
  return (
    <Container disabled={!isFocused} size={size} variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
