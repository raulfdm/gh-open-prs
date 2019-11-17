import React from "react";
import styled from "styled-components";

import { useSettings } from "../store/store";

const OrgLink = styled.a`
  color: inherit;
`;

const Title = styled.h1`
  margin: 0;
  z-index: 3;
  text-align: center;
  padding: 16px 0;
  margin: -1px;
  position: sticky;
  top: 0;
  background-color: #252628;
  img {
    background-color: white;
    max-width: 50px;
  }
  span {
    margin-left: 1rem;
    font-size: 1.6rem;
  }
`;

export const PageTitle = () => {
  const {
    settings: { orgData }
  } = useSettings();

  if (orgData?.avatarUrl) {
    return (
      <Title>
        <OrgLink href={orgData.url}>
          <img src={orgData.avatarUrl} alt="Organization logo" />
          <span>{orgData.name}</span>
        </OrgLink>
      </Title>
    );
  } else if (orgData?.name) {
    return (
      <Title>
        <OrgLink href={orgData.url}>{orgData.name}</OrgLink>
      </Title>
    );
  } else {
    return <Title>Pull Requests Tracker</Title>;
  }
};
