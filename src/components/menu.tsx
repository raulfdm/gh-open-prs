import React from "react";
import Sidebar from "react-sidebar";
import styled from "styled-components";
import { Menu as MenuIcon } from "styled-icons/boxicons-regular/Menu";

import { SettingsPanel } from "./settings-panel";

const WIDTH = "400px";

const SidebarWrapper = styled.section`
  padding: 16px;
  max-width: 500px;
`;

const OpenButton: any = styled.button`
  border: none;
  background-color: #393b3e;
  border-radius: 3px;
  left: -3px;
  z-index: 3;
  color: white;
  position: absolute;

  transition: left 0.3s ease-out 0s;
`;

export const Menu = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <Sidebar
      shadow={false}
      docked={isOpen}
      sidebar={
        <SidebarWrapper>
          <SettingsPanel />
        </SidebarWrapper>
      }
      onSetOpen={toggleSidebar}
      styles={{
        sidebar: { background: "#393b3e", width: WIDTH }
      }}
    >
      <OpenButton onClick={toggleSidebar} isOpen={isOpen}>
        <MenuIcon width={30} />
      </OpenButton>
      {props.children}
    </Sidebar>
  );
};
