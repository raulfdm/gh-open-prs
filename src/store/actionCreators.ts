import React from "react";

import { ActionTypesEnum, Action } from "./reducer";
import { Settings, Repository, Organization } from "../types";
import { setSettings } from "./localStorage";

export function actionsCreator(dispatch: React.Dispatch<Action>) {
  return {
    updateSettings(settings: Settings) {
      setSettings(settings);
      dispatch({ type: ActionTypesEnum.UPDATE_SETTINGS, payload: settings });
    },
    addRepo(repo: Repository) {
      dispatch({ type: ActionTypesEnum.ADD_REPO, payload: repo });
    },
    setOrgData(orgData: Organization) {
      dispatch({ type: ActionTypesEnum.SET_ORG_DATA, payload: orgData });
    }
  };
}

export type Actions = ReturnType<typeof actionsCreator>;
