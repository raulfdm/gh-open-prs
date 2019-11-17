import React from "react";

import { LabelProps } from "./types";
import { LabelWrapper } from "./ui";

export const Label = ({ color, children }: LabelProps) => {
  return <LabelWrapper color={color}>{children}</LabelWrapper>;
};
