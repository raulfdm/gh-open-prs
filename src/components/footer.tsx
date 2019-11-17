import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  /* background: rgb(57, 59, 62); */
  padding: 0.8rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: inherit;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      Made with love.
      <a href="https://github.com/raulfdm/gh-open-prs"> Check Github</a>
    </StyledFooter>
  );
};
