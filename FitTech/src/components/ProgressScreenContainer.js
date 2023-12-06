import { useCallback, useState } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";
import ExerciseForm from "./ExerciseForm";
import LogExerciseForm from "./LogExerciseForm";
import PortalPopup from "./PortalPopup";
import PopupWorkoutUpdated from "./PopupWorkoutUpdated";
import PopUp from "./PopUp";
import Bottombar2 from "./Bottombar2";

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
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon2 = styled.img`
  position: relative;
  width: 31.3px;
  height: 32.7px;
  cursor: pointer;
`;

const Bottombar = styled.div`
  position: absolute;
  top: 869px;
  left: 523px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  width: 393px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
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
  font-size: 38px;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 18px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
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

const WorkoutItem = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WorkoutexercisesIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;

const EntryBackground = styled.div`
    background-color: #D9D9D9;
    padding: 10px;
    width: 90%;
`;

const ViewButton = styled.div`
  padding: var(--padding-3xs);
  background-color: var(--color-dodgerblue);
  align-self: center
  border-radius: var(--button-radius);
  width: 50px;
  margin: auto;
  margin-top: 25px;
  margin-botton: 10px;
  cursor: pointer;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;

const WorkoutTitle = styled.div `
  text-align: center;
  font-size: 28px;
  margin-top: 10px;
`;

const WorkoutDate = styled.div `
  text-align: center;
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

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoggingBackgroundClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-screen-delete-workout");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const onViewClick = useCallback(() => {
    navigate("/progress-view-workout")
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
      <ChestDay>Log book</ChestDay>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <Scrollframe1>
        <LoggingBackground1>
          <EntryBackground>
            <WorkoutTitle>Chest Day</WorkoutTitle>
            <WorkoutDate>Wednesday November 22nd 2023</WorkoutDate>
            <ViewButton onClick={onViewClick}>View</ViewButton>
          </EntryBackground>
          <EntryBackground>
            <WorkoutTitle>Back Day</WorkoutTitle>
            <WorkoutDate>Wednesday November 23rd 2023</WorkoutDate>
            <ViewButton>View</ViewButton>
          </EntryBackground>
          <EntryBackground>
            <WorkoutTitle>Leg Day</WorkoutTitle>
            <WorkoutDate>Wednesday November 24th 2023</WorkoutDate>
            <ViewButton>View</ViewButton>
          </EntryBackground>
          <EntryBackground>
            <WorkoutTitle>Chest Day</WorkoutTitle>
            <WorkoutDate>Wednesday November 25th 2023</WorkoutDate>
            <ViewButton>View</ViewButton>
          </EntryBackground>
          <EntryBackground>
            <WorkoutTitle>Back Day</WorkoutTitle>
            <WorkoutDate>Wednesday November 26th 2023</WorkoutDate>
            <ViewButton>View</ViewButton>
          </EntryBackground>
          {/* <LogExerciseForm exerciseTitle="Barbell Bench Press" />
          <LogExerciseForm exerciseTitle="Chest Fly" />
          <LogExerciseForm exerciseTitle="Incline Bench" /> */}
        </LoggingBackground1>
      </Scrollframe1>
      <Bottombar2 />
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
}

export default LoggingForm;
