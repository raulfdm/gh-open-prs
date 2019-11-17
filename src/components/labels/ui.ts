import styled from "styled-components";
import { getFontColor } from "../../utils/color";

export const LabelsWrapper = styled.div`
  display: inline-flex;
  margin-left: 36px;
`;

export const LabelWrapper = styled.p`
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

  display: flex;
  align-items: center;

  margin: 0;

  &:hover {
    outline: 0;
  }
`;
