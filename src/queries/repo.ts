import gql from "graphql-tag";

export const PULL_REQUESTS_BY_REPO_NAME = gql`
  query PullRequests($name: String!) {
    organization(login: "blendle") {
      name
      url
      repository(name: $name) {
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
