import { getRepoList } from "../utils/github";

import { Settings, Repository, Organization } from "../types";

export enum ActionTypesEnum {
  UPDATE_SETTINGS = "UPDATE_SETTINGS",
  ADD_REPO = "ADD_REPO",
  SET_ORG_DATA = "SET_ORG_DATA"
}

export const initialState = {
  apiToken: "",
  orgName: "",
  repos: "",
  reposList: [],
  orgData: {},
  repositories: {}
};

export type Action = {
  type: ActionTypesEnum;
  payload: Settings | Repository | Organization;
};

export function reducer(state: Settings, action: Action) {
  switch (action.type) {
    case ActionTypesEnum.UPDATE_SETTINGS: {
      const { orgName, repos, apiToken } = action.payload as Settings;

      return {
        ...state,
        orgName,
        repos,
        apiToken,
        reposList: getRepoList(repos)
      };
    }
    case ActionTypesEnum.ADD_REPO: {
      const repo = action.payload as Repository;
      const { repositories } = state;

      const copy = { ...repositories, [repo.name]: repo };

      return {
        ...state,
        repositories: copy
      };
    }
    case ActionTypesEnum.SET_ORG_DATA: {
      const orgData = action.payload as Organization;
      return { ...state, orgData };
    }
    default:
      throw new Error("UNTRACKED ACTION TYPE");
  }
}
