import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-bottom: 10px;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;

export const LabelWrapper = styled.div`
  cursor: pointer;
  opacity: ${(props: { isActive: boolean }) => (props.isActive ? "1" : "0.5")};
`;
