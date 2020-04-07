import React from "react";
import { Form } from "react-final-form";

import {
  SearchButton,
  Title,
  Wrapper,
  CleanDataButton,
  SettingsSection,
} from "./ui";
import { SettingsPanelProps } from "./types";
import { InputRow } from "../input-row/";
import { validateSettings } from "../../utils/settings";
import { useSettings } from "../../store/store";

export const SettingsPanel = ({ onSearch }: SettingsPanelProps) => {
  const { settings, actions } = useSettings();
  const [showToken, setShowToken] = React.useState(false);

  return (
    <SettingsSection>
      <Wrapper>
        <Title>Settings</Title>
        <Form
          validateOnBlur
          initialValues={settings}
          validate={validateSettings}
          onSubmit={(values) => {
            actions.updateSettings(values);
            if (onSearch) {
              onSearch();
            }
          }}
          render={({ handleSubmit }) => {
            return (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <InputRow name="orgName" label="Organization Name" />
                <InputRow
                  name="repos"
                  label="Repositories (separated by comma)"
                />

                <InputRow
                  name="apiToken"
                  label="Github API Token"
                  inputProps={{ type: showToken ? "text" : "password" }}
                />

                <div>
                  <SearchButton type="submit">Search</SearchButton>
                  <SearchButton onClick={() => setShowToken(!showToken)}>
                    Show token
                  </SearchButton>
                </div>
              </form>
            );
          }}
        />
      </Wrapper>
      <CleanDataButton onClick={actions.cleanSettings}>
        Clean my stored settings
      </CleanDataButton>
    </SettingsSection>
  );
};
