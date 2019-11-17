import React from "react";

import { Label } from "./label";
import { LabelsProps } from "./types";
import { LabelsWrapper } from "./ui";

export const Labels = ({ labels }: LabelsProps) => {
  const projectLabels = labels.edges || [];

  if (projectLabels.length === 0) {
    return null;
  }

  return (
    <LabelsWrapper>
      {projectLabels.map(({ node }) => (
        <Label color={node.color} key={node.name}>
          {node.name}
        </Label>
      ))}
    </LabelsWrapper>
  );
};
