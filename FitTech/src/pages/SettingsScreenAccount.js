import UserSettingsForm2 from "../components/UserSettingsForm2";
import styled from "styled-components";

const SettingsScreenAccountRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const SettingsScreenAccount = () => {
  return (
    <SettingsScreenAccountRoot>
      <UserSettingsForm2 />
    </SettingsScreenAccountRoot>
  );
};

export default SettingsScreenAccount;
