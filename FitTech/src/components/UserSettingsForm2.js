import { useCallback } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";
import HelpFormInput from "./HelpFormInput";

const IosstatusBarblack1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  width: 123.7px;
  height: 15.9px;
`;
const IosstatusBarblack = styled.div`
  position: absolute;
  top: -24px;
  left: -1px;
  width: 393px;
  height: 71px;
  font-size: var(--body-1-size);
  color: var(--color-dimgray-100);
`;
const SettingsScreenChild = styled.div`
  position: absolute;
  top: 73px;
  left: 36px;
`;
const User1234 = styled.b`
  position: absolute;
  top: 122px;
  left: 140px;
`;
const ProfilePicIcon = styled.img`
  position: absolute;
  height: 5.99%;
  width: 12.98%;
  top: 6.92%;
  right: 43.51%;
  bottom: 87.09%;
  left: 43.51%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 19px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const HomeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const SettingsComponentIcon = styled.img`
  position: relative;
  width: 35.7px;
  height: 37.3px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SettingsItem = styled.div`
  background-color: var(--black);
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Bottombar = styled.div`
  position: absolute;
  top: 783px;
  left: 1px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  width: 392px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
`;
const Account = styled.div`
  position: absolute;
  top: 182px;
  left: 40px;
  font-size: var(--font-size-3xl);
  text-decoration: underline;
`;
const SettingsScreenItem = styled.div`
  position: absolute;
  top: 212px;
  right: 25px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 349px;
  height: 38px;
`;
const ChangePassword = styled.div`
  position: absolute;
  top: 216px;
  left: 24px;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 2.35%;
  width: 3.05%;
  top: 25.94%;
  right: 8.4%;
  bottom: 71.71%;
  left: 88.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SettingsScreenInner = styled.div`
  position: absolute;
  top: 212px;
  right: 25px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 349px;
  height: 38px;
  cursor: pointer;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 262px;
  right: 25px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 349px;
  height: 38px;
`;
const ForgotPassword = styled.div`
  position: absolute;
  top: 266px;
  left: 24px;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 2.35%;
  width: 3.05%;
  top: 31.81%;
  right: 8.4%;
  bottom: 65.85%;
  left: 88.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SettingsScreenChild1 = styled.div`
  position: absolute;
  top: 262px;
  right: 25px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 349px;
  height: 38px;
  cursor: pointer;
`;
const SettingsScreenChild2 = styled.div`
  position: absolute;
  top: 312px;
  right: 25px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 349px;
  height: 38px;
  cursor: pointer;
`;
const BackToSettings = styled.div`
  position: absolute;
  top: 317px;
  left: 23px;
`;
const VectorIcon7 = styled.img`
  position: absolute;
  height: 2.35%;
  width: 3.05%;
  top: 37.68%;
  right: 8.4%;
  bottom: 59.98%;
  left: 88.55%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SettingsScreenRoot = styled.div`
  position: absolute;
  top: 86px;
  left: 523px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 393px;
  height: 852px;
  overflow: hidden;
  mix-blend-mode: normal;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--white);
  font-family: var(--community);
`;

const UserSettingsForm2 = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const onHomeNavClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutNavClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressNavClick = useCallback(() => {
    navigate("/progress-screen-main")
  }, [navigate]);

  const onCommunityClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/settings-screen-change-password");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/settings-screen-forgot-password");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  return (
    <SettingsScreenRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <SettingsScreenChild />
      <User1234>user1234</User1234>
      <ProfilePicIcon alt="" src="/profilepic.svg" />
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackClick} />
      <Bottombar>
        <HomeIcon alt="" src="/home.svg" onClick={onHomeNavClick} />
        <VectorIcon alt="" src="/vector1.svg" onClick={onWorkoutNavClick} />
        <VectorIcon1 alt="" src="/vector2.svg" onClick={onProgressNavClick} />
        <VectorIcon alt="" src="/vector3.svg" onClick={onCommunityClick} />
        <SettingsItem>
          <SettingsComponentIcon alt="" src="/settings-component.svg" />
        </SettingsItem>
      </Bottombar>
      <Account>Account</Account>
      <SettingsScreenItem />
      <VectorIcon3 alt="" src="/vector7.svg" />
      <SettingsScreenInner onClick={onRectangle1Click} />
      <ChangePassword>Change Password</ChangePassword>
      <VectorIcon3 alt="" src="/vector7.svg" />
      <RectangleDiv />
      <ForgotPassword>Account</ForgotPassword>
      <VectorIcon5 alt="" src="/vector7.svg" />
      <SettingsScreenChild1 onClick={onRectangle3Click} />
      <ForgotPassword>Forgot Password</ForgotPassword>
      <VectorIcon5 alt="" src="/vector7.svg" />
    </SettingsScreenRoot>
  );
};

export default UserSettingsForm2;
