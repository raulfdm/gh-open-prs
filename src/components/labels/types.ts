export type LabelNode = {
  color: string;
  name: string;
  id: string;
};

export type Label = {
  node: LabelNode;
};

export type Labels = {
  edges: Label[];
};

export type LabelsProps = {
  labels: Labels;
};

export type LabelProps = {
  children: React.ReactNode;
  color: string;
  key?: string;
};
