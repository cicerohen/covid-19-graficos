import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Title from "./Title";

const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const View = ({ title, children }) => {
  return (
    <iv>
      <div>{<Header />}</div>
      <Main>
        {title && <StyledTitle title={title} />}
        {children}
      </Main>
    </iv>
  );
};

export default View;
