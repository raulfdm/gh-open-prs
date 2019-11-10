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
