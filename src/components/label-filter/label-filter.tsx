import React from "react";

import { Label } from "../labels";
import { LabelFilterProps } from "./types";
import { LabelWrapper, Wrapper } from "./ui";

export const noLabel = {
  id: "no-label",
  color: "ffffff",
  name: "No label"
};

export const LabelFilter = ({
  labelData,
  selectedLabel,
  onLabelClick
}: LabelFilterProps) => {
  return (
    <Wrapper>
      {Object.entries(labelData).map(([id, label]) => {
        return (
          <LabelWrapper
            key={id}
            isActive={!selectedLabel.includes(id)}
            onClick={() => onLabelClick(id)}
          >
            <Label {...label}>{label.name}</Label>
          </LabelWrapper>
        );
      })}
    </Wrapper>
  );
};
