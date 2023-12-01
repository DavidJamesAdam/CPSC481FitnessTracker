import UserSettingsForm1 from "../components/UserSettingsForm1";
import styled from "styled-components";

const SettingsScreenChangePasswRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const SettingsScreenChangePassw = () => {
  return (
    <SettingsScreenChangePasswRoot>
      <UserSettingsForm1 />
    </SettingsScreenChangePasswRoot>
  );
};

export default SettingsScreenChangePassw;
