import { getRepoList } from "../utils/github";

import { Settings, Repository, Organization, LabelToSave } from "../types";
import { setLabelsByRepo } from "./localStorage";

export enum ActionTypesEnum {
  UPDATE_SETTINGS = "UPDATE_SETTINGS",
  ADD_REPO = "ADD_REPO",
  SET_ORG_DATA = "SET_ORG_DATA",
  UPDATE_FILTERED_LABELS_BY_REPO = "UPDATE_FILTERED_LABELS_BY_REPO"
}

export const initialState = {
  apiToken: "",
  orgName: "",
  repos: "",
  reposList: [],
  orgData: {},
  repositories: {},
  filteredLabelsByRepoId: {}
};

export type Action = {
  type: ActionTypesEnum;
  payload: Settings | Repository | Organization | LabelToSave;
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
    case ActionTypesEnum.UPDATE_FILTERED_LABELS_BY_REPO: {
      const { labelId, repoId } = action.payload as LabelToSave;
      const nextState = { ...state };
      const byId = nextState.filteredLabelsByRepoId[repoId] || [];

      const cu = byId.includes(labelId)
        ? byId.filter(id => id !== labelId)
        : byId.concat(labelId);

      nextState.filteredLabelsByRepoId[repoId] = cu;

      setLabelsByRepo(nextState.filteredLabelsByRepoId);

      return { ...nextState };
    }
    default:
      throw new Error("UNTRACKED ACTION TYPE");
  }
}
