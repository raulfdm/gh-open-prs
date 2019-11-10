import { Author } from "./author";
import { Labels } from "./labels";

export type PullRequestNode = {
  title: string;
  baseRefName: string;
  headRefName: string;
  number: number;
  id: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  labels: Labels;
  author: Author;
};

export type PullRequest = {
  node: PullRequestNode;
};

export type PullRequests = {
  totalCount: number;
  edges: PullRequest[];
};
