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
const AddItemComponent = styled.img`
  position: absolute;
  top: 609px;
  left: 139px;
  width: 113px;
  height: 105px;
  cursor: pointer;
`;
const MyWorkouts = styled.div`
  position: absolute;
  top: 105px;
  left: 98px;
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
const ChestDayChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--gray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 338px;
  height: 62px;
  cursor: pointer;
`;
const ChestDay1 = styled.div`
  position: absolute;
  top: 11px;
  left: 91px;
  display: flex;
  align-items: flex-end;
  width: 179.2px;
`;
const ChestDay = styled.div`
  position: absolute;
  top: 269px;
  left: 28px;
  width: 338px;
  height: 62px;
`;
const UileditIcon = styled.img`
  position: absolute;
  top: 102px;
  left: 317px;
  width: 47px;
  height: 45px;
  cursor: pointer;
`;
const WorkoutBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--gray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 340px;
  height: 62px;
  cursor: pointer;
`;
const StartEmptyWorkout = styled.div`
  position: absolute;
  top: 11px;
  left: 11.3px;
  display: flex;
  align-items: flex-end;
  width: 323.6px;
`;
const ChestDay2 = styled.div`
  position: absolute;
  top: 173px;
  left: 26px;
  width: 340px;
  height: 62px;
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
  color: var(--black);
  font-family: var(--body-1);
`;

const WorkoutListLogging = () => {
  const navigate = useNavigate();

  const onAddItemComponentClick = useCallback(() => {
    navigate("/new-workout");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/logging-log-screen");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-screen-delete-workout");
  }, [navigate]);

  const onWorkoutBackgroundClick = useCallback(() => {
    navigate("/workout-screen-exercise-added");
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
      <AddItemComponent
        alt=""
        src="/add-item-component.svg"
        onClick={onAddItemComponentClick}
      />
      <MyWorkouts>My Workouts</MyWorkouts>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackClick} />
      <ChestDay>
        <ChestDayChild onClick={onRectangleClick} >
          <ChestDay1>Chest Day</ChestDay1>
        </ChestDayChild>
      </ChestDay>
      <UileditIcon alt="" src="/uiledit.svg" onClick={onUileditIconClick} />
      <ChestDay2>
        <WorkoutBackground onClick={onWorkoutBackgroundClick} />
        <StartEmptyWorkout>Start Empty Workout</StartEmptyWorkout>
      </ChestDay2>
    </WorkoutScreenRoot>
  );
};

export default WorkoutListLogging;
