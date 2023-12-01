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
const UileditIcon = styled.img`
  position: absolute;
  top: 102px;
  left: 317px;
  width: 47px;
  height: 45px;
  cursor: pointer;
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
  color: var(--color-dimgray-100);
  font-family: var(--community);
`;

const WorkoutContainer = () => {
  const navigate = useNavigate();

  const onAddItemComponentClick = useCallback(() => {
    navigate("/new-workout");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/workout-screen-exercise-added");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-screen-delete-workout");
  }, [navigate]);

  return (
    <WorkoutScreenRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <AddItemComponent
        alt=""
        src="/add-item-component.svg"
        onClick={onAddItemComponentClick}
      />
      <MyWorkouts>My Workouts</MyWorkouts>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <WorkoutScreenChild onClick={onRectangleClick} />
      <ChestDay>Chest Day</ChestDay>
      <UileditIcon alt="" src="/uiledit.svg" onClick={onUileditIconClick} />
    </WorkoutScreenRoot>
  );
};

export default WorkoutContainer;
