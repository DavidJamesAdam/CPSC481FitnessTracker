import SettingsScreen5 from "../components/SettingsScreen5";
import SettingsScreen4 from "../components/SettingsScreen4";
import styled from "styled-components";

const SettingsScreenMainRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const SettingsScreenMain = () => {
  return (
    <SettingsScreenMainRoot>
      <SettingsScreen5 />
      <SettingsScreen4 />
    </SettingsScreenMainRoot>
  );
};

export default SettingsScreenMain;
