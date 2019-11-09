import React from "react";
import styled from "styled-components";

import { getFontColor } from "../utils/color";

const LabelWrapper = styled.p`
  background-color: ${props => `#${props.color}` || "grey"};
  border-radius: 2px;
  box-shadow: rgba(27, 31, 35, 0.12) 0 -1px 0 inset;
  color: ${props => (props.color ? getFontColor(props.color) : "#000")};
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  line-height: 15px;
  padding: 0.15em 4px;
  text-decoration: none;

  margin: 0;
  margin-left: 5px;

  display: flex;
  align-items: center;

  &:hover {
    outline: 0;
  }
`;

export const Label = ({ color, children }: any) => {
  return <LabelWrapper color={color}>{children}</LabelWrapper>;
};
