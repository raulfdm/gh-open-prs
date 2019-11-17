import React from "react";
import Sidebar from "react-sidebar";
import styled from "styled-components";
import { Settings as SettingsIcon } from "styled-icons/octicons/Settings";

import { SettingsPanel } from "./settings-panel";

const WIDTH = "400px";

const OpenButton: any = styled.button`
  border: none;
  background-color: #393b3e;
  border-bottom-right-radius: 3px;
  left: -3px;
  z-index: 4;
  color: white;
  position: absolute;

  padding: 0.3rem;
  top: 0;

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
      sidebar={<SettingsPanel />}
      onSetOpen={toggleSidebar}
      styles={{
        sidebar: { background: "#393b3e", width: WIDTH }
      }}
    >
      <OpenButton onClick={toggleSidebar} isOpen={isOpen}>
        <SettingsIcon width={30} />
      </OpenButton>

      {props.children}
    </Sidebar>
  );
};
