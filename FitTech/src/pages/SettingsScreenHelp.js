import UserSettingsForm from "../components/UserSettingsForm";
import styled from "styled-components";

const SettingsScreenHelpRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const SettingsScreenHelp = () => {
  return (
    <SettingsScreenHelpRoot>
      <UserSettingsForm />
    </SettingsScreenHelpRoot>
  );
};

export default SettingsScreenHelp;
