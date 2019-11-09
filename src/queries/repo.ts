import gql from "graphql-tag";

export const REPOSITORY = gql`
  query {
    organization(login: "blendle") {
      name
      url
      repository(name: "blendle-web-client") {
        id
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
