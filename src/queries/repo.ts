import gql from "graphql-tag";

export const PULL_REQUESTS_BY_REPO_NAME = gql`
  query PullRequests($repositoryName: String!, $organizationName: String!) {
    organization(login: $organizationName) {
      name
      url
      repository(name: $repositoryName) {
        id
        url
        pullRequests(
          last: 20
          states: OPEN
          orderBy: { direction: DESC, field: CREATED_AT }
        ) {
          totalCount
          edges {
            node {
              title
              baseRefName
              headRefName
              number
              id
              createdAt
              updatedAt
              url
              labels(first: 20) {
                edges {
                  node {
                    color
                    name
                    id
                  }
                }
              }
              author {
                login
                avatarUrl
              }
            }
          }
        }
      }
    }
  }
`;
