import { PullRequest } from "../pull-request/types";

export type PullRequestsProps = {
  prs: PullRequest[];
  projectId: string;
};
