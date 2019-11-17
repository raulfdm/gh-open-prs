import styled from "styled-components";
import { ExternalLink } from "styled-icons/evil/ExternalLink";

export const Row = styled.div`
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
  justify-content: space-between;
  margin: -1px -1px 0;
  padding: 16px;
  color: black;
  display: flex;
  flex-direction: column;
`;

export const Details = styled.p`
  margin: 0;
  color: #586069;
  font-size: 12px;
  margin-top: 4px;
`;

export const InfoWrapper = styled.div``;

export const InfoLink = styled.a`
  color: #24292e;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  vertical-align: middle;
  position: relative;

  &:hover {
    color: #0366d6;
    outline: 0;
  }
`;

export const ExternalLinkIcon = styled(ExternalLink)`
  width: 16px;
  top: -4px;
  position: absolute;
`;
