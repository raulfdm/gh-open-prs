import React from "react";

import { Labels } from "../labels/labels";

import { dayjs } from "../../utils/date";
import { PullRequestNode } from "./types";

import { Row, Details, ExternalLinkIcon, InfoLink, InfoWrapper } from "./ui";

export const PullRequest = ({
  title,
  url,
  createdAt,
  author,
  number,
  labels
}: PullRequestNode) => {
  return (
    <Row>
      <InfoWrapper>
        <InfoLink href={url} target="_blank" rel="noopener">
          {title}
          <ExternalLinkIcon />
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
