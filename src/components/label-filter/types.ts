import { LabelNode } from "../labels/types";

export type LabelFilterProps = {
  labelData: {
    [id: string]: LabelNode;
  };
  selectedLabel: string[];
  onLabelClick: (labelId: string) => void;
};
