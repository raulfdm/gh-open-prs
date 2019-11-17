import React from "react";

import { ActionTypesEnum, Action, initialState } from "./reducer";
import { Settings, Repository, Organization } from "../types";
import { setSettings, cleanUpSettings } from "./localStorage";

export function actionsCreator(dispatch: React.Dispatch<Action>) {
  function updateSettings(settings: Settings) {
    setSettings(settings);
    dispatch({ type: ActionTypesEnum.UPDATE_SETTINGS, payload: settings });
  }

  function addRepo(repo: Repository) {
    dispatch({ type: ActionTypesEnum.ADD_REPO, payload: repo });
  }

  function setOrgData(orgData: Organization) {
    dispatch({ type: ActionTypesEnum.SET_ORG_DATA, payload: orgData });
  }

  function setFilteredLabels(repoId: string, labelId: string) {
    dispatch({
      type: ActionTypesEnum.UPDATE_FILTERED_LABELS_BY_REPO,
      payload: {
        repoId,
        labelId
      }
    });
  }

  function cleanSettings() {
    const confirmation = confirm(
      "Do you really want to clean up your settings saved?"
    );

    if (confirmation) {
      cleanUpSettings();
      //@ts-ignore
      updateSettings(initialState);
    }
  }

  return {
    updateSettings,
    addRepo,
    setOrgData,
    setFilteredLabels,
    cleanSettings
  };
}

export type Actions = ReturnType<typeof actionsCreator>;
