import { PullRequests } from "./pull-requests";

export type Repository = {
  id: string;
  pullRequests: PullRequests;
  url: string;
};
