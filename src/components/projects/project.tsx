import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { ProjectProps } from "./types";
import {
  RepositoryName,
  ExternalLinkIcon,
  RegularMessage,
  RepositoryNameWrapper
} from "./ui";

import { PULL_REQUESTS_BY_REPO_NAME } from "../../queries";
import { useSettings } from "../../store/store";
import { LoaderIcon } from "../loader-svg";
import { PullRequest } from "../pull-request/";
import { PullRequest as PrType } from "../pull-request/types";

export const Project = ({ repoName, orgName }: ProjectProps) => {
  const { actions, settings } = useSettings();

  const { data, loading, error } = useQuery(PULL_REQUESTS_BY_REPO_NAME, {
    variables: {
      repositoryName: repoName,
      organizationName: orgName
    },
    errorPolicy: "ignore",
    onError: err => {
      return new Error(err.message);
    },
    context: {
      headers: {
        Authorization: `Bearer ${settings.apiToken}`
      }
    }
  });

  React.useEffect(() => {
    if (!error && !loading && data?.organization?.repository) {
      actions.setOrgData(data.organization);
      actions.addRepo(data.organization.repository);
    }
  }, [error, loading]);

  if (loading) {
    return <LoaderIcon />;
  }

  if (error && !loading) {
    console.error(error);
    if (error.networkError) {
      //@ts-ignore
      if (error.networkError.statusCode === 401) {
        return (
          <RegularMessage>Apparently this is not a valid token.</RegularMessage>
        );
      }
    }
    return (
      <RegularMessage>Something went wrong. Check the console</RegularMessage>
    );
  }

  if (!data?.organization) {
    return (
      <RegularMessage>
        * Organization: <strong>"{orgName}"</strong> was not found
      </RegularMessage>
    );
  }

  const repo = data.organization?.repository;

  if (!repo) {
    return (
      <RegularMessage>
        * Repository: <strong>"{repoName}"</strong> was not found
      </RegularMessage>
    );
  }

  const prs = repo?.pullRequests?.edges ?? [];

  return (
    <>
      <RepositoryNameWrapper>
        <RepositoryName>
          <a href={repo.url} target="_blank" rel="noopener">
            {repo.name}
            <ExternalLinkIcon />
          </a>
        </RepositoryName>
      </RepositoryNameWrapper>
      {prs.length > 0 ? (
        prs.map(({ node }: PrType) => <PullRequest key={node.id} {...node} />)
      ) : (
        <RegularMessage>
          There are no PR's opened for this project.
        </RegularMessage>
      )}
    </>
  );
};
