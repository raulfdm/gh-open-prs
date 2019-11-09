import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { PullRequest } from "./pull-request";

import { PULL_REQUESTS_BY_REPO_NAME } from "../queries";

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

type Data = {
  organization: {
    name: string;
    repository: {
      id: string;
      pullRequests: {
        totalCount: number;
        edges: Array<{
          node: {
            createdAt: string;
            title: string;
          };
        }>;
      };
    };
  };
};

const getPrFormated = (data: Data) => {
  return data.organization.repository.pullRequests;
};

export const PullRequests = ({ repoName }: { repoName: string }) => {
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
      {serializedData.edges.map((prData, index) => (
        <PullRequest key={index} {...prData.node} />
      ))}
    </PullRequestsWrapper>
  );
};
