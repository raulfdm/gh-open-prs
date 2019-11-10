import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { ExternalLink } from "styled-icons/evil/ExternalLink";

import { PULL_REQUESTS_BY_REPO_NAME } from "../queries";
import { PullRequest } from "./pull-request";
import { Organization } from "../types";

type PullRequestsProps = {
  repoName: string;
};

const PullRequestsWrapper = styled.div`
  position: relative;
`;

const RepoName = styled.h2`
  position: sticky;
  background-color: #252628;
  margin: 0 -2px;
  padding: 16px 5px;
  top: 36px;

  a {
    color: #fff;

    &:hover {
      color: #0366d6;
      outline: 0;
    }
  }
`;

const ExternalLinkIcon = styled(ExternalLink)`
  width: 20px;
  top: 14px;
  position: absolute;
`;

const getPrFormated = (data: { organization: Organization }) => ({
  ...data.organization.repository
});

export const PullRequests = ({ repoName }: PullRequestsProps) => {
  const { data, loading /* error */ } = useQuery(PULL_REQUESTS_BY_REPO_NAME, {
    variables: {
      name: repoName
    }
  });

  if (loading) {
    return null;
  }

  const { pullRequests, url } = getPrFormated(data);

  return (
    <PullRequestsWrapper>
      <RepoName>
        <a href={url} target="_blank" rel="noopener">
          {repoName}
          <ExternalLinkIcon />
        </a>
      </RepoName>
      {pullRequests.edges.map(prData => (
        <PullRequest key={prData.node.id} {...prData.node} />
      ))}
    </PullRequestsWrapper>
  );
};
