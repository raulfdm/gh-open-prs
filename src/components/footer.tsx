import React from "react";
import styled from "styled-components";

import { Github } from "@styled-icons/boxicons-logos/Github";
import { Heart } from "@styled-icons/octicons/Heart";

const StyledFooter = styled.footer`
  background: rgb(57, 59, 62);
`;

const GhIcon = styled(Github)`
  width: 30px;
`;

const HeartIcon = styled(Heart)`
  color: tomato;
  width: 16px;
`;

const FooterWrapper = styled.section`
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
  }
`;

const Words = styled.p`
  font-size: 14px;
  flex: 1;
  text-align: center;
`;

const Links = styled.div``;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Words>
          Made with <HeartIcon /> by{" "}
          <a href="https://github.com/raulfdm">Raul Melo</a>
        </Words>
        <Links>
          <a href="https://github.com/raulfdm/gh-open-prs">
            <GhIcon />
          </a>
        </Links>
      </FooterWrapper>
    </StyledFooter>
  );
};
