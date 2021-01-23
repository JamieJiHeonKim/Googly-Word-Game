import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.buttonColor || "transparent"};
  border: 4px solid white;
  color: whilte;
  cursor: pointer;
`;

export const Button = ({ children, buttonColor, ...props }) => {
  return (
    <StyledButton buttonColor={buttonColor} {...props}>
      {children}
    </StyledButton>
  );
};

export const DangerButton = ({ children, ...props }) => {
  return (
    <StyledButton buttonColor="red" {...props}>
      {children}
    </StyledButton>
  );
};
