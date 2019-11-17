import React from "react";
import styled from "styled-components";

const StyledAppTitleBar = styled.div`
  padding: 1rem 0;
`;
const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

export const AppTitleBar = ({}: any) => {
  return (
    <StyledAppTitleBar>
      <Title>Github PR Tracker</Title>
    </StyledAppTitleBar>
  );
};
