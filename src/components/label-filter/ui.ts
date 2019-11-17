import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const LabelWrapper = styled.div`
  cursor: pointer;
  opacity: ${(props: { isActive: boolean }) => (props.isActive ? "1" : "0.5")};
`;