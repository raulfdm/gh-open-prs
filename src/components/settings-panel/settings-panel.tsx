import React from "react";
import { Form } from "react-final-form";

import { SearchButton, Title, Wrapper } from "./ui";
import { SettingsPanelProps } from "./types";
import { InputRow } from "../input-row/";
import { validateSettings } from "../../utils/settings";
import { useSettings } from "../../store/store";

export const SettingsPanel = ({ onSearch }: SettingsPanelProps) => {
  const { settings, actions } = useSettings();

  return (
    <Wrapper>
      <Title>Settings</Title>
      <Form
        validateOnBlur
        initialValues={settings}
        validate={validateSettings}
        onSubmit={values => {
          actions.updateSettings(values);
          if (onSearch) {
            onSearch();
          }
        }}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <InputRow name="orgName" label="Organization Name" />
              <InputRow
                name="repos"
                label="Repositories (separated by comma)"
              />

              <InputRow name="apiToken" label="Github API Token" />

              <SearchButton type="submit">Search</SearchButton>
            </form>
          );
        }}
      />
    </Wrapper>
  );
};
