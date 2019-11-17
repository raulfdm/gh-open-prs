import { Organization } from "./organization";
import { Repository } from "./repository";

export type PartialSettings = {
  apiToken: string;
  orgName: string;
  repos: string;
};

export type Settings = PartialSettings & {
  reposList: string[];
  orgData: Organization;
  repositories: { [repoName: string]: Repository };
};
