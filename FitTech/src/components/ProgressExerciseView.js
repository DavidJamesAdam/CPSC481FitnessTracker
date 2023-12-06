import { useCallback, useState } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";
import ExerciseForm from "./ExerciseForm";
import LogExerciseForm from "./LogExerciseForm";
import PortalPopup from "./PortalPopup";
import PopupWorkoutUpdated from "./PopupWorkoutUpdated";
import PopUp from "./PopUp";
import LoggedExerciseView from "./LoggedExerciseView";

const IosstatusBarblack = styled.div`
  position: absolute;
  top: -24px;
  left: -1px;
  width: 393px;
  height: 71px;
  font-size: var(--body-1-size);
  color: var(--color-dimgray-100);
`;
const LoggingBackground = styled.div`
  position: absolute;
  top: 109px;
  left: 18px;
  border-radius: var(--br-8xs);
  background-color: var(--color-slategray-100);
  width: 360px;
  height: 610px;
  cursor: pointer;
`;
const ChestDay = styled.div`
  margin-top: 50px;
  font-size: var(--font-size-13xl);
  color: var(--white);
  text-align: center;
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
const UileditIcon = styled.img`
  position: absolute;
  top: 64px;
  left: 316px;
  width: 47px;
  height: 45px;
  cursor: pointer;
`;
const ScrollFrame1 = styled.div`
  position: absolute;
  top: 17px;
  left: 9px;
  width: 343px;
  height: 682px;
`;
const LoggingBackground1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: -21px;
  left: 8px;
  width: 360px;
  height: auto;
  margin: 10px;
`;
const Scrollframe1 = styled.div`
  position: absolute;
  top: 116px;
  left: 10px;
  width: 375px;
  height: 603px;
  overflow-y: auto;
  text-align: center;
`;
const FinishWorkout = styled.div`
  position: relative;
  width: 100px;
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--color-dodgerblue);
  border-radius: var(--br-8xs);
`;
const FinishWorkoutWrapper = styled.div`
  position: absolute;
  top: 720px;
  left: 15px;
  padding: var(--padding-3xs);
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: space-between;
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
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--black);
  font-family: var(--body-1);
`;


const LoggingForm = () => {
  // const [exercises, setExercises] = useState([<SetWrapper setNumber='1' removeClick={removeSetClick}/>, <SetWrapper setNumber='2' removeClick={removeSetClick}/>, <SetWrapper setNumber='3' removeClick={removeSetClick}/>])

  // const addExerciseClick = () => {
  //     setSets([...sets, <SetWrapper setNumber={sets.length + 1} removeClick={removeSetClick}/>])
  // }
  const navigate = useNavigate();

  const finishWorkoutClickNavigate = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openPopupWorkoutUpdated = useCallback(() => {
    setPopupWorkoutUpdatedOpen(true);
  }, []);

  const [isPopupWorkoutUpdatedOpen, setPopupWorkoutUpdatedOpen] =
    useState(false);

  const finishWorkoutClick = () => {
    openPopupWorkoutUpdated();
  }

  const closePopupWorkoutUpdated = useCallback(() => {
    setPopupWorkoutUpdatedOpen(false);
  }, []);

  const onLoggingBackgroundClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-screen-delete-workout");
  }, [navigate]);

  return (
    <WorkoutScreenRoot>
      <IosstatusBarblack>
        <IosstatusBarblack>iOS/Status Bar/Black</IosstatusBarblack>
        <IOSStatusBarBlackIcon
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </IosstatusBarblack>
      <LoggingBackground onClick={onLoggingBackgroundClick} />
      <ChestDay>Chest Day</ChestDay>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <Scrollframe1>
        <LoggingBackground1>
          <LoggedExerciseView exerciseTitle="Barbell Bench Press" />
          <LoggedExerciseView exerciseTitle="Chest Fly" />
          <LoggedExerciseView exerciseTitle="Incline Bench" />
        </LoggingBackground1>
      </Scrollframe1>
      <FinishWorkoutWrapper>
        <FinishWorkout>Add Exercise +</FinishWorkout>
        <FinishWorkout onClick={finishWorkoutClick}>Finish Workout</FinishWorkout>
      </FinishWorkoutWrapper>
      {isPopupWorkoutUpdatedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupWorkoutUpdated}
        >
          <PopUp onClose={closePopupWorkoutUpdated} text="Workout Successfully Logged" top="86px" left="523px" checkMarkClick={finishWorkoutClickNavigate}/>
        </PortalPopup>
      )}
    </WorkoutScreenRoot>
  );
};
/*
  const openPopupWorkoutUpdated = useCallback(() => {
    setPopupWorkoutUpdatedOpen(true);
  }, []);

  const [isPopupWorkoutUpdatedOpen, setPopupWorkoutUpdatedOpen] =
  useState(false);

  {isPopupWorkoutUpdatedOpen && (
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      onOutsideClick={closePopupWorkoutUpdated}
    >
      <PopupWorkoutUpdated onClose={closePopupWorkoutUpdated} />
    </PortalPopup>
  )}
 */

export default LoggingForm;
