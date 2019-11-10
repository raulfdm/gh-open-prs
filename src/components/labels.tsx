import React from "react";
import styled from "styled-components";
import { Label } from "./label";

const LabelsWrapper = styled.div`
  display: inline-flex;
  margin-left: 10px;
`;

export const Labels = ({ labels }: any) => {
  const projectLabels = labels.edges || [];

  if (projectLabels.length === 0) {
    return null;
  }
  return (
    <LabelsWrapper>
      {projectLabels.map(({ node }: any) => (
        <Label color={node.color} key={node.name}>
          {node.name}
        </Label>
      ))}
    </LabelsWrapper>
  );
};
