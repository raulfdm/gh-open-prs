import { PullRequest } from "../components/pull-request/types";

export type PullRequests = {
  totalCount: number;
  edges: PullRequest[];
};
