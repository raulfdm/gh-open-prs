import React from "react";
// import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { PullRequest } from "./pull-request";

import { PULL_REQUESTS_BY_REPO_NAME } from "../queries";

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
  const { data, loading, error } = useQuery(PULL_REQUESTS_BY_REPO_NAME, {
    variables: {
      name: repoName
    }
  });
  console.log({ data, loading, error });

  if (loading) {
    return null;
  }

  const serializedData = getPrFormated(data);

  return (
    <div>
      {serializedData.edges.map((prData, index) => (
        <PullRequest key={index} {...prData.node} />
      ))}
    </div>
  );
};
