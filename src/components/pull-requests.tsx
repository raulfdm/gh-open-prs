import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

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
`;

const getPrFormated = (data: { organization: Organization }) => {
  return data.organization.repository.pullRequests;
};

export const PullRequests = ({ repoName }: PullRequestsProps) => {
  const { data, loading /* error */ } = useQuery(PULL_REQUESTS_BY_REPO_NAME, {
    variables: {
      name: repoName
    }
  });

  if (loading) {
    return null;
  }

  const serializedData = getPrFormated(data);

  return (
    <PullRequestsWrapper>
      <RepoName>{repoName}</RepoName>
      {serializedData.edges.map(prData => (
        <PullRequest key={prData.node.id} {...prData.node} />
      ))}
    </PullRequestsWrapper>
  );
};
