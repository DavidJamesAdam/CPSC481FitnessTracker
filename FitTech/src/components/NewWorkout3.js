import { useCallback } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import Vaadinbutton from "./Vaadinbutton";
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
const ChestDay = styled.div`
  position: absolute;
  top: 91px;
  left: 126px;
  text-decoration: underline;
`;
const YourListAppears = styled.div`
  position: absolute;
  top: 174px;
  left: 58px;
  font-size: var(--font-size-xl);
`;
const AddItemComponent = styled.img`
  position: absolute;
  top: 220px;
  left: 135px;
  width: 113px;
  height: 105px;
  cursor: pointer;
`;
const NewWorkoutChild = styled.div`
  position: absolute;
  top: 685px;
  left: 265px;
  border-radius: var(--br-8xs);
  background-color: var(--gray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 112px;
  height: 62px;
`;
const Finish = styled.div`
  position: absolute;
  top: 697px;
  left: 276px;
  color: var(--black);
  cursor: pointer;
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
const UileditIcon = styled.img`
  position: absolute;
  top: 91px;
  left: 306px;
  width: 47px;
  height: 45px;
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
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--community);
`;

const NewWorkout3 = () => {
  const navigate = useNavigate();

  const onAddItemComponentClick = useCallback(() => {
    navigate("/workout-screen-choose-exercise-category-view");
  }, [navigate]);

  const onFinishTextClick = useCallback(() => {
    navigate("/workout-screen-workout-created");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-edit");
  }, [navigate]);

  return (
    <NewWorkoutRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <ChestDay>Chest Day</ChestDay>
      <YourListAppears>Your list appears to be empty</YourListAppears>
      <Vaadinbutton />
      <AddItemComponent
        alt=""
        src="/add-item-component.svg"
        onClick={onAddItemComponentClick}
      />
      <NewWorkoutChild />
      <Finish onClick={onFinishTextClick}>Finish</Finish>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <UileditIcon alt="" src="/uiledit.svg" onClick={onUileditIconClick} />
    </NewWorkoutRoot>
  );
};

export default NewWorkout3;
