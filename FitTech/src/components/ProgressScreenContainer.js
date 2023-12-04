import { useCallback } from "react";
import styled from "styled-components";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import { useNavigate } from "react-router-dom";
import ProgressNavTabYes from "./ProgressNavTabYes";
import InputDropdownActive from "./InputDropdownActive";

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
const HomeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const WorkoutItemno2 = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
`;
const VectorIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const VectorIcon1 = styled.img`
  position: relative;
  width: 31.3px;
  height: 32.7px;
  cursor: pointer;
`;
const Bottombar = styled.div`
  position: absolute;
  top: 783px;
  left: 0px;
  border-radius: var(--br-10xs);
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
const PleaseSelectExercise = styled.div`
  position: relative;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
const Exercises7 = styled.div`
  flex: 1;
  position: relative;
`;
const ChevronIcon = styled.img`
  position: relative;
  width: 10px;
  height: 10px;
`;
const DropdownBox = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  gap: var(--gap-3xs);
  color: var(--gray);
  font-family: var(--input-field-label);
`;
const Inputdropdownactive1 = styled.div`
  position: absolute;
  top: 107px;
  left: 38px;
  width: 245px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
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
const Goals = styled.div`
  position: relative;
`;
const GoalsWrapper = styled.div`
  position: absolute;
  top: 643px;
  left: 140px;
  border-radius: var(--br-xl);
  background-color: var(--color-dodgerblue);
  width: 123px;
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
const ToGoal = styled.div`
  position: absolute;
  top: 545px;
  left: 147px;
  font-size: var(--font-size-xl);
`;
const To = styled.div`
  position: absolute;
  top: 205px;
  left: 269px;
  font-size: var(--community-size);
  display: inline-block;
  width: 20px;
  height: 16px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Image11Icon = styled.img`
  position: absolute;
  top: 297px;
  left: 16px;
  width: 361px;
  height: 218px;
  object-fit: cover;
`;
const ProgresssScreenRoot = styled.div`
  position: absolute;
  top: 86px;
  left: 524px;
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
  font-family: var(--body-1);
`;

const ProgressScreenContainer = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Progress screen - Goals" to the project
    console.log("goals");
  }, []);

  return (
    <ProgresssScreenRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </IosstatusBarblack>
      <Bottombar>
        <HomeIcon alt="" src="/home.svg" onClick={onHomeIconClick} />
        <WorkoutItemno2>
          <HomeIcon
            alt=""
            src="/workoutexercises-component.svg"
            onClick={onWorkoutexercisesComponentIconClick}
          />
        </WorkoutItemno2>
        <ProgressNavTabYes />
        <VectorIcon alt="" src="/vector.svg" onClick={onVectorIconClick} />
        <VectorIcon1 alt="" src="/vector6.svg" onClick={onVectorIcon1Click} />
      </Bottombar>
      <Inputdropdownactive1>
        <PleaseSelectExercise>{`Please Select Exercise `}</PleaseSelectExercise>
        <DropdownBox>
          <Exercises7>Exercises</Exercises7>
          <ChevronIcon alt="" src="/chevron.svg" />
        </DropdownBox>
      </Inputdropdownactive1>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <InputDropdownActive
        pleaseSelectExercise="Data history"
        exercises="L6M"
        showPleaseSelectExercise
        inputDropdownActiveWidth="105px"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="186px"
        inputDropdownActiveLeft="38px"
      />
      <GoalsWrapper onClick={onFrameContainerClick}>
        <Goals>Goals</Goals>
      </GoalsWrapper>
      <ToGoal>85% To Goal!</ToGoal>
      <To>to</To>
      <InputDropdownActive
        pleaseSelectExercise="Select Date Range"
        showPleaseSelectExercise
        inputDropdownActiveWidth="44px"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="186px"
        inputDropdownActiveLeft="211px"
      />
      <InputDropdownActive
        showPleaseSelectExercise
        inputDropdownActiveWidth="44px"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="186px"
        inputDropdownActiveLeft="289px"
      />
      <Image11Icon alt="" src="/image-11@2x.png" />
    </ProgresssScreenRoot>
  );
};

export default ProgressScreenContainer;
