import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import InputTextActive from "./InputTextActive";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";

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
const WorkoutName = styled.div`
  position: absolute;
  top: 110px;
  left: 84px;
  font-size: var(--font-size-13xl);
`;
const WorkoutDescriptionOptional = styled.div`
  position: absolute;
  top: 253px;
  left: 42px;
  font-size: var(--font-size-3xl);
  display: inline-block;
  width: 324px;
  height: 41px;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 20px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const NewWorkoutRoot = styled.div`
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
  font-size: var(--body-1-size);
  color: var(--white);
  font-family: var(--community);
`;

const WorkoutForm = ({
  onLineMdconfirmCircleTwotoneClick,
  onBackCom2IconClick,
}) => {
  return (
    <NewWorkoutRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <WorkoutName>Workout Name</WorkoutName>
      <WorkoutDescriptionOptional>
        Workout Description (Optional)
      </WorkoutDescriptionOptional>
      <InputTextActive
        workoutNamePlaceholder="Enter workout name here"
        propTop="152px"
        propLeft="96px"
        propWidth="200px"
        propHeight="unset"
        propFlex="unset"
      />
      <InputTextActive
        workoutNamePlaceholder="Enter workout description here"
        propTop="294px"
        propLeft="42px"
        propWidth="316px"
        propHeight="182px"
        propFlex="1"
      />
      <LineMdconfirmCircleTwotoneIcon
        propTop="680px"
        propLeft="299px"
        propCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
    </NewWorkoutRoot>
  );
};

export default WorkoutForm;
