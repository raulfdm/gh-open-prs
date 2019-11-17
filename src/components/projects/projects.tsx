import React from "react";

import { Section, ProjectSection } from "./ui";
import { useSettings } from "../../store/store";
import { Welcome } from "../welcome";
import { Project } from "./project";
import { LoaderIcon } from "../loader-svg";

export const Projects = () => {
  const { settings, actions } = useSettings();

  const canFetchData = settings.orgName && settings.repos && settings.apiToken;

  React.useEffect(() => {
    if (canFetchData && Object.keys(settings.orgData).length === 0) {
      actions.updateSettings({ ...settings });
    }
  }, []);

  if (!canFetchData) {
    return (
      <Section>
        <Welcome />
      </Section>
    );
  }

  if (settings.reposList.length > 0) {
    return (
      <Section>
        {settings.reposList.map(repo => {
          return (
            <ProjectSection key={repo}>
              <Project repoName={repo} orgName={settings.orgName} />
            </ProjectSection>
          );
        })}
      </Section>
    );
  }

  return (
    <Section>
      <LoaderIcon />
      <p>Loading your repos...</p>
    </Section>
  );
};
