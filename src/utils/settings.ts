import { hasInvalidRepoName } from "./github";
import { Settings, PartialSettings } from "../types";

export function validateSettings(values: Settings) {
  const errors: { orgName?: string; repos?: string; apiToken?: string } = {};

  if (!values.orgName) {
    errors.orgName = "Required";
  }
  if (!values.repos) {
    errors.repos = "Required";
  }

  if (!values.apiToken) {
    errors.apiToken = "Required";
  }

  if (values.repos && hasInvalidRepoName(values.repos)) {
    errors.repos = "It contains invalid repo name";
  }

  return errors;
}

export function getPartialSettings(settings: Settings): PartialSettings {
  const { apiToken, orgName, repos } = settings;

  return { apiToken, orgName, repos };
}
