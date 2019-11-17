import Cookies from "js-cookie";

import { Settings, PartialSettings } from "../types";
import { getPartialSettings } from "../utils/settings";

enum COOKIE_KEYS {
  API_TOKEN = "pr_tracker_api_token",
  REPOS = "pr_tracker_repos",
  ORG_NAME = "pr_tracker_org_name"
}

export function getSettings(): PartialSettings | {} {
  if (process.browser) {
    const apiToken = Cookies.get(COOKIE_KEYS.API_TOKEN);
    const orgName = Cookies.get(COOKIE_KEYS.ORG_NAME);
    const repos = Cookies.get(COOKIE_KEYS.REPOS);

    return { apiToken, orgName, repos };
  }
  return {};
}

export function setSettings(settings: Settings) {
  if (process.browser) {
    const { apiToken, repos, orgName } = getPartialSettings(settings);

    Cookies.set(COOKIE_KEYS.API_TOKEN, apiToken);
    Cookies.set(COOKIE_KEYS.REPOS, repos);
    Cookies.set(COOKIE_KEYS.ORG_NAME, orgName);
  }
}
