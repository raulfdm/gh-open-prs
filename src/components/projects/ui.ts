import styled from "styled-components";
import { ExternalLink } from "styled-icons/evil/ExternalLink";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  flex: 1;
  overflow-y: auto;
  max-width: 960px;
  min-width: 300px;
  margin: 0 auto;
  width: 100%;
  align-self: stretch;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

export const PullRequestsWrapper = styled.div`
  position: relative;
`;

export const RepositoryNameWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #252628;
  padding: 16px 5px;
  margin: 0 -2px;
  z-index: 2;
`;

export const RepositoryName = styled.h3`
  margin: 0;
  a {
    color: #fff;

    &:hover {
      color: #0366d6;
      outline: 0;
    }
  }
`;

export const ExternalLinkIcon = styled(ExternalLink)`
  width: 20px;
  top: 14px;
  position: absolute;
`;

export const Divider = styled.hr`
  width: 100%;
  border-width: 0;
  border-bottom-width: 1px;
`;

export const RegularMessage = styled.p`
  margin: 0;
`;

export const ProjectSection = styled.article`
  margin-bottom: 1rem;
`;
