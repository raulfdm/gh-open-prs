import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Labels } from "./labels";

dayjs.extend(relativeTime);

const Row = styled.div`
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

const Details = styled.p`
  margin: 0;
  color: #586069;
  font-size: 12px;
  margin-top: 4px;
`;

const InfoWrapper = styled.div``;

const InfoLink = styled.a`
  color: #24292e;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  vertical-align: middle;

  /* :hover */
  &:hover {
    color: #0366d6;
    outline: 0;
  }
`;

export const PullRequest = ({
  title,
  url,
  createdAt,
  author,
  number,
  labels
}: any) => {
  return (
    <Row>
      <InfoWrapper>
        <InfoLink href={url} target="_blank" rel="noopener">
          {title}
        </InfoLink>
        <Labels labels={labels} />
      </InfoWrapper>
      <Details>
        #{number} opened {dayjs().from(dayjs(createdAt), true)} ago by{" "}
        {author.login}
      </Details>
    </Row>
  );
};
