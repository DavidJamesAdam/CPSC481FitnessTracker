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
  font-size: var(--font-size-13xl);
`;
const YourListIs = styled.div`
  position: absolute;
  top: 191px;
  left: 98px;
  font-size: var(--font-size-5xl);
`;
const UileditIcon = styled.img`
  position: absolute;
  top: 102px;
  left: 319px;
  width: 47px;
  height: 45px;
  cursor: pointer;
  background-color: var(--color-dodgerblue);
  border-radius: 10px;
    box-shadow: 3px 3px 5px black;

  &:hover {
    box-shadow: 3px 3px 15px black;
  }
`;
const WorkoutScreenRoot = styled.div`
  position: relative;
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
  font-size: var(--body-1-size);
  color: var(--white);
  font-family: var(--community);
`;

const WorkoutScreen2 = () => {
  const navigate = useNavigate();

  const onAddItemComponentClick = useCallback(() => {
    navigate("/workout-screen-name-describe-workout");
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
      <YourListIs>Your list is empty</YourListIs>
      <UileditIcon alt="" src="/uiledit.svg" />
    </WorkoutScreenRoot>
  );
};

export default WorkoutScreen2;
