import React from "react";
import { useRouter } from "next/router";

import { initialState, reducer } from "./reducer";
import { Settings } from "../types";
import { actionsCreator, Actions } from "./actionCreators";
import { getSettings } from "./localStorage";

type SettingsContextType = {
  settings: Settings;
  actions: Actions;
};

// @ts-ignore
const SettingsContext = React.createContext<SettingsContextType>();
SettingsContext.displayName = "SettingsContext";

export function useSettings() {
  const context = React.useContext<SettingsContextType>(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used withing a SettingsProvider");
  }

  return context;
}

export function SettingsProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const { query: queryState } = router;
  const dataFromStorage = getSettings();

  // @ts-ignore
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    ...dataFromStorage,
    ...queryState
  });

  const actions = actionsCreator(dispatch);

  return (
    <SettingsContext.Provider value={{ settings: state, actions }} {...props} />
  );
}
