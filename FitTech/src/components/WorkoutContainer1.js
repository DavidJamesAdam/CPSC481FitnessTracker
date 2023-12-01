import { useState, useCallback } from "react";
import PopupAreYouSureDeleteWo from "./PopupAreYouSureDeleteWo";
import PortalPopup from "./PortalPopup";
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
const MyWorkouts = styled.div`
  position: absolute;
  top: 105px;
  left: 98px;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 18px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const WorkoutScreenChild = styled.div`
  position: absolute;
  top: 181px;
  left: 52px;
  border-radius: var(--br-8xs);
  background-color: var(--gray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 290px;
  height: 62px;
  cursor: pointer;
`;
const ChestDay = styled.div`
  position: absolute;
  top: 193px;
  left: 123px;
  color: var(--black);
`;
const MdigarbageCanOutlineIcon = styled.img`
  position: absolute;
  top: 186px;
  left: 342px;
  border-radius: var(--br-xl);
  width: 50px;
  height: 52px;
  overflow: hidden;
  cursor: pointer;
`;
const Cancel = styled.div`
  position: relative;
`;
const CancelWrapper = styled.div`
  position: absolute;
  top: 670px;
  left: 123px;
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
  font-size: var(--font-size-3xl);
`;
const WorkoutScreenRoot = styled.div`
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
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--community);
`;

const WorkoutContainer1 = () => {
  const [isPopupAreYouSureDeleteWoOpen, setPopupAreYouSureDeleteWoOpen] =
    useState(false);
  const navigate = useNavigate();

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/workout-screen-exercise-added");
  }, [navigate]);

  const openPopupAreYouSureDeleteWo = useCallback(() => {
    setPopupAreYouSureDeleteWoOpen(true);
  }, []);

  const closePopupAreYouSureDeleteWo = useCallback(() => {
    setPopupAreYouSureDeleteWoOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/workout-screen-workout-created");
  }, [navigate]);

  return (
    <>
      <WorkoutScreenRoot>
        <IosstatusBarblack>
          <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
          <IOSStatusBarBlackIcon />
        </IosstatusBarblack>
        <MyWorkouts>My Workouts</MyWorkouts>
        <BackCom2Icon
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
        <WorkoutScreenChild onClick={onRectangleClick} />
        <ChestDay>Chest Day</ChestDay>
        <MdigarbageCanOutlineIcon
          alt=""
          src="/mdigarbagecanoutline.svg"
          onClick={openPopupAreYouSureDeleteWo}
        />
        <CancelWrapper onClick={onFrameContainerClick}>
          <Cancel>Cancel</Cancel>
        </CancelWrapper>
      </WorkoutScreenRoot>
      {isPopupAreYouSureDeleteWoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupAreYouSureDeleteWo}
        >
          <PopupAreYouSureDeleteWo onClose={closePopupAreYouSureDeleteWo} />
        </PortalPopup>
      )}
    </>
  );
};

export default WorkoutContainer1;
