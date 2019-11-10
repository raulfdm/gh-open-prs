import React from "react";
import styled from "styled-components";

import { Label } from "./label";
import { Labels as LabelsTypes } from "../types";

type LabelsProps = {
  labels: LabelsTypes;
};

const LabelsWrapper = styled.div`
  display: inline-flex;
  margin-left: 10px;
`;

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
