import React from "react";
import { useSettings } from "../../store/store";
import {
  OrgTitleStyled,
  CompanyInfoWrapper,
  CompanyName,
  Description,
  LogoImg,
  OrgLink,
  OrgTitleSection
} from "./ui";

export const OrgTitle = () => {
  const {
    settings: { orgData }
  } = useSettings();

  const DefaultCase = () => <>Pull Requests Tracker</>;

  const CompleteOrgInfo = () => (
    <>
      <LogoImg src={orgData.avatarUrl} alt="Organization logo" />
      <CompanyInfoWrapper>
        <OrgLink href={orgData.url}>
          <CompanyName>{orgData.name}</CompanyName>
        </OrgLink>
        <Description>{orgData.description}</Description>
      </CompanyInfoWrapper>
    </>
  );
  const NoLogo = () => <OrgLink href={orgData.url}>{orgData.name}</OrgLink>;

  let Component = DefaultCase;

  if (orgData?.avatarUrl) {
    Component = CompleteOrgInfo;
  } else if (orgData?.name) {
    Component = NoLogo;
  }

  return (
    <OrgTitleSection>
      <OrgTitleStyled>
        <Component />
      </OrgTitleStyled>
    </OrgTitleSection>
  );
};
