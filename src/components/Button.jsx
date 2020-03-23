import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const variant = ({ color, bgColor }) => css`
  color: ${color};
  background-color: ${bgColor};
  border-color: ${darken("0.05", bgColor)};
  &:hover:enabled,
  &:focus {
    background-color: ${darken("0.05", bgColor)};
  }
`;

const Wrapper = styled.button`
  color: #333;
  border-color: #e6e6e6;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  background-color: #f9f9f9;
  display: flex;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.9rem 1.2rem;
  font-weight: 400;
  white-space: nowrap;
  margin: 5px;
  text-decoration: none;

  ${props =>
    props.size === "small" &&
    `
    font-size: 1rem;
  `};
  ${props =>
    props.size === "medium" &&
    `
    font-size: 1.4rem;
  `};
  ${props =>
    props.size === "large" &&
    `
    font-size: 2.5rem;
  `};
`;

const Button = ({
  children,
  size = "small",
  onClick,
  href,
  as = "button",
  className
}) => (
  <Wrapper
    as={as}
    href={href}
    className={className}
    size={size}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);

export default Button;
