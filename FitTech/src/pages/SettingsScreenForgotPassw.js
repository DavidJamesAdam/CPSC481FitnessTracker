import UserSettingsForm3 from "../components/UserSettingsForm3";
import styled from "styled-components";

const SettingsScreenForgotPasswRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const SettingsScreenForgotPassw = () => {
  return (
    <SettingsScreenForgotPasswRoot>
      <UserSettingsForm3 />
    </SettingsScreenForgotPasswRoot>
  );
};

export default SettingsScreenForgotPassw;
