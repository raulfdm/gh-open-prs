import { PullRequests } from "./pull-requests";

export type Repository = {
  id: string;
  name: string;
  pullRequests: PullRequests;
  url: string;
};
