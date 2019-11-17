import styled from "styled-components";

export const Row = styled.dl`
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const LabelWrapper = styled.dt`
  float: left;
  line-height: 32px;
  margin: 0;
  label {
    font-weight: 400;
    position: static;
  }
`;

export const InputWrapper = styled.dd`
  line-height: 32px;
  margin: 0;
  display: flex;
  flex-direction: column;

  input {
    background-color: #fff;
    background-position: right 8px center;
    background-repeat: no-repeat no-repeat;
    border: 1px solid #2188ff;
    border-radius: 3px;
    box-shadow: rgba(27, 31, 35, 0.075) 0 1px 2px inset,
      rgba(3, 102, 214, 0.3) 0 0 0 0.2em;
    color: #24292e;
    font-size: 14px;
    line-height: 20px;
    margin: 0 5px 0 0;
    max-width: 100%;
    min-height: 24px;
    outline: none;
    overflow: visible;
    padding: 6px 8px;
    vertical-align: middle;
  }
`;

export const ErrorLabel = styled.span`
  color: tomato;
`;
