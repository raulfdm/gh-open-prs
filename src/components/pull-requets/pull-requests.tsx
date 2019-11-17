import React from "react";

import { LabelFilter, noLabel } from "../label-filter";
import { PullRequest } from "../pull-request";
import { PullRequestsProps } from "./types";
import { RegularMessage } from "../projects/ui";
import { serializeLabelFromPrs } from "./utils";
import { useSettings } from "../../store/store";

export const PullRequests = ({ prs, projectId }: PullRequestsProps) => {
  const { settings, actions } = useSettings();

  function labelHandler(repoId: string) {
    return (labelId: string) => {
      actions.setFilteredLabels(repoId, labelId);
    };
  }

  const filteredLabels = settings.filteredLabelsByRepoId[projectId] || [];

  return (
    <>
      <LabelFilter
        labelData={serializeLabelFromPrs(prs)}
        selectedLabel={filteredLabels}
        onLabelClick={labelHandler(projectId)}
      />
      {prs.length > 0 ? (
        prs.map(({ node }) => {
          const updatedNode = { ...node };

          if (updatedNode.labels.edges.length === 0) {
            updatedNode.labels.edges = [{ node: noLabel }];
          }

          const prLabels = updatedNode.labels.edges.map(label => label.node.id);
          const shouldPrBeRendered = !prLabels.some(labelId =>
            filteredLabels.includes(labelId)
          );

          if (shouldPrBeRendered) {
            return <PullRequest key={node.id} {...updatedNode} />;
          }
          return null;
        })
      ) : (
        <RegularMessage>
          There are no PR's opened for this project.
        </RegularMessage>
      )}
    </>
  );
};
