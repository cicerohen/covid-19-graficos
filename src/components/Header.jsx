import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Button from "./Button";

const Wrapper = styled.header`
  min-height: 90px;
  align-items: center;
  display: flex;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  padding: 0 15px;
`;

const Right = styled.div`
  display: flex;
`;

const Header = () => (
  <Wrapper>
    <div>
      <Title title="Covid-19 - Brasil" />
    </div>
    <Right>
      <Button as="a" href="/grafico-geral">
        Geral
      </Button>
      <Button as="a" href="/grafico-por-estados">
        Por estados
      </Button>
    </Right>
  </Wrapper>
);

export default Header;
