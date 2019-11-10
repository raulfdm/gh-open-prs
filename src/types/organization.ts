import { Repository } from "./repository";

export type Organization = {
  name: string;
  url: string;
  repository: Repository;
};
