import { Repository } from "./repository";

export type Organization = {
  name: string;
  url: string;
  avatarUrl: string;
  repository: Repository;
};
