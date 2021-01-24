import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.buttonColor || "transparent"};
  border: none;
  color: white;
  padding: 6px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: teal;
  padding: 2px 5px;
`;

const Title2 = styled.h1`
  font-size: 60px;
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

export const GooglyFont = ({ children, ...props }) => {
  return <Title2 {...props}>{children}</Title2>;
};
