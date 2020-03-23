import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  text-transform: uppercase;
  ${props =>
    props.size === 1 &&
    `
      font-size: 1.2rem;
    `}
  ${props =>
    props.size === 2 &&
    `
      font-size: 1.2rem;
    `}
`;

const Title = ({ title, size = 1, tag = "h1", className }) => (
  <Wrapper size={size} as={tag} className={className}>
    {title}
  </Wrapper>
);

export default Title;
