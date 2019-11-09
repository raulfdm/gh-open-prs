import React from "react";
// import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { PullRequest } from "./pull-request";

import { REPOSITORY } from "../queries";

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

export const PullRequests = () => {
  const { data, loading, error } = useQuery(REPOSITORY, {
    variables: {
      name: "blendle-web-client"
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
