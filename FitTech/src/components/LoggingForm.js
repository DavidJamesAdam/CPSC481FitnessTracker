import { useCallback } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";
import ExerciseForm from "./ExerciseForm";
import LogExerciseForm from "./LogExerciseForm";

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
  position: absolute;
  top: 54px;
  left: 117px;
  font-size: var(--font-size-13xl);
  color: var(--white);
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
`;
const FinishWorkoutWrapper = styled.div`
  position: absolute;
  top: 734px;
  left: 18px;
  border-radius: var(--br-8xs);
  background-color: var(--color-dodgerblue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
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
  font-size: var(--font-size-base);
  color: var(--black);
  font-family: var(--body-1);
`;

const LoggingForm = () => {
  const navigate = useNavigate();

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
      <UileditIcon alt="" src="/uiledit.svg" onClick={onUileditIconClick} />
      <Scrollframe1>
        <LoggingBackground1>
          <LogExerciseForm exerciseTitle="Barbell Bench Press" />
          <LogExerciseForm exerciseTitle="Chest Fly" />
          <LogExerciseForm exerciseTitle="Incline Bench" />
        </LoggingBackground1>
      </Scrollframe1>
      <FinishWorkoutWrapper>
        <FinishWorkout>Finish Workout</FinishWorkout>
      </FinishWorkoutWrapper>
    </WorkoutScreenRoot>
  );
};

export default LoggingForm;
