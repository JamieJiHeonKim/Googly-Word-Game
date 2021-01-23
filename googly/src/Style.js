import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.buttonColor || "transparent"};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: teal;
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

export const ScoreFont = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
