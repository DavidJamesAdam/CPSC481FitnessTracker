import { useState, useCallback } from "react";
import PopupResetPasswordEmailC from "./PopupResetPasswordEmailC";
import PortalPopup from "./PortalPopup";
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
  font-size: var(--font-size-5xl);
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
const ResetPassword = styled.b`
  position: absolute;
  top: 167px;
  left: 27px;
  font-size: var(--font-size-lg);
  font-family: var(--input-field-label);
`;
const SaveChanges = styled.div`
  position: relative;
`;
const SaveChangesWrapper = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-dodgerblue);
  width: 172px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs) 0px;
  box-sizing: border-box;
  cursor: pointer;
`;
const CancelWrapper = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-crimson);
  width: 172px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-3xs) 0px;
  box-sizing: border-box;
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
const SettingsScreenRoot = styled.div`
  position: absolute;
  top: 86px;
  left: 547px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 393px;
  height: 852px;
  overflow: hidden;
  mix-blend-mode: normal;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--white);
  font-family: var(--community);
`;

const ForgotPasswordWrapper = styled.div `
  position: absolute;
  display: flex;
  gap: 30px;
  flex-direction: column;
  top: 160px;
  left: 46px;
  margin-top: 20px;
`;


const UserSettingsForm3 = () => {
  const [isPopupResetPasswordEmailCOpen, setPopupResetPasswordEmailCOpen] =
    useState(false);
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/settings-screen-account");
  }, [navigate]);

  const openPopupResetPasswordEmailC = useCallback(() => {
    setPopupResetPasswordEmailCOpen(true);
  }, []);

  const closePopupResetPasswordEmailC = useCallback(() => {
    setPopupResetPasswordEmailCOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/settings-screen-account");
  }, [navigate]);

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

  return (
    <>
      <SettingsScreenRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <SettingsScreenChild />
        <User1234>user1234</User1234>
        <ProfilePicIcon alt="" src="/profilepic.svg" />
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackClick}
        />
        <ForgotPasswordWrapper>
          <HelpFormInput titleText="Reset Password" placeholder="Ex: example123@email.com"/>
          <SaveChangesWrapper onClick={openPopupResetPasswordEmailC}>
            <SaveChanges> Save Changes</SaveChanges>
          </SaveChangesWrapper>
          <CancelWrapper onClick={onFrameContainer1Click}>
            <SaveChanges>Cancel</SaveChanges>
          </CancelWrapper>
        </ForgotPasswordWrapper>
        <Bottombar>
          <HomeIcon alt="" src="/home.svg" onClick={onHomeNavClick} />
          <VectorIcon alt="" src="/vector1.svg" onClick={onWorkoutNavClick} />
          <VectorIcon1 alt="" src="/vector2.svg" onClick={onProgressNavClick} />
          <VectorIcon alt="" src="/vector3.svg" onClick={onCommunityNavClick} />
          <SettingsItem>
            <SettingsComponentIcon alt="" src="/settings-component.svg" />
          </SettingsItem>
        </Bottombar>
      </SettingsScreenRoot>
      {isPopupResetPasswordEmailCOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupResetPasswordEmailC}
        >
          <PopupResetPasswordEmailC onClose={closePopupResetPasswordEmailC} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserSettingsForm3;
