import { Labels } from "../labels/types";
import { Author } from "../../types";

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
