import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid #e1e4e8;
  border-width: 0;
  margin: 0 0 24px;
  min-width: 0;
  padding: 0 0 16px;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
`;

export const SearchButton = styled.button`
  -webkit-appearance: none;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  background-position: -1px -1px;
  background-repeat: repeat no-repeat;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  flex: 1 1 auto;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  overflow: visible;
  padding: 6px 12px;
  position: relative;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  /* :hover */
  &:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    background-position: -0.5em center;
    border-color: rgba(27, 31, 35, 0.35);
    text-decoration: none;
  }
`;
