import { useCallback } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";

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
const AccountChild = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 349px;
  height: 38px;
`;
const Help = styled.div`
  position: relative;
`;
const AccountWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-3xs) 0px 0px;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 52.63%;
  width: 3.44%;
  top: 23.68%;
  right: 2.29%;
  bottom: 23.68%;
  left: 94.27%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Account = styled.div`
  position: absolute;
  top: 177px;
  left: 24px;
  width: 349px;
  height: 38px;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const Account2 = styled.div`
  position: absolute;
  top: 227px;
  left: 24px;
  width: 349px;
  height: 38px;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 19px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
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

const SettingsScreen4 = () => {
  const navigate = useNavigate();

  const onHomeNavClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutNavClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressNavClick = useCallback(() => {
    navigate("/progress-screen-main");
  }, [navigate]);

  const onCommunityNavClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onAccountContainer2Click = useCallback(() => {
    navigate("/settings-screen-account");
  }, [navigate]);

  const onAccountContainer3Click = useCallback(() => {
    navigate("/settings-screen-help");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SettingsScreenRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <Bottombar>
        <HomeIcon alt="" src="/home.svg" onClick={onHomeNavClick} />
        <VectorIcon alt="" src="/vector1.svg" onClick={onWorkoutNavClick} />
        <VectorIcon1 alt="" src="/vector2.svg" onClick={onProgressNavClick} />
        <VectorIcon alt="" src="/vector3.svg" onClick={onCommunityNavClick} />
        <SettingsItem>
          <SettingsComponentIcon alt="" src="/settings-component.svg" />
        </SettingsItem>
      </Bottombar>
      <SettingsScreenChild />
      <User1234>user1234</User1234>
      <ProfilePicIcon alt="" src="/profilepic.svg" />
      <Account onClick={onAccountContainer2Click}>
        <AccountChild />
        <AccountWrapper>
          <Help>Account</Help>
        </AccountWrapper>
        <VectorIcon3 alt="" src="/vector7.svg" />
      </Account>
      <Account2 onClick={onAccountContainer3Click}>
        <AccountChild />
        <AccountWrapper>
          <Help>Help</Help>
        </AccountWrapper>
        <VectorIcon3 alt="" src="/vector7.svg" />
      </Account2>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackClick} />
    </SettingsScreenRoot>
  );
};

export default SettingsScreen4;
