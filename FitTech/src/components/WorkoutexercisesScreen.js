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
const Workouts = styled.b`
  position: relative;
  letter-spacing: 0.2em;
`;
const Button = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-dodgerblue);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-xl);
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(50% - 217px);
  left: calc(50% - 118.5px);
  width: 237px;
  height: 54px;
  cursor: pointer;
`;
const FrameChild = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -0.5px;
  left: -0.5px;
  background-color: var(--color-gainsboro);
  border-top: 1px solid var(--black);
  box-sizing: border-box;
  width: 393px;
  height: 1px;
  z-index: 0;
`;
const WorkoutexercisesScreenInner = styled.div`
  position: absolute;
  top: calc(50% - 0px);
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-31xl) var(--padding-3xs);
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 580px;
  left: 78px;
  width: 237px;
  height: 69px;
  cursor: pointer;
`;
const HomeIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const WorkoutexercisesIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const WorkoutItem = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  top: 783px;
  left: 0px;
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
const BackCom2Icon = styled.img`
  position: absolute;
  top: 47px;
  left: 15px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const WorkoutexercisesScreenRoot = styled.div`
  position: absolute;
  top: calc(50% - 426px);
  left: calc(50% - 196px);
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

const WorkoutexercisesScreen = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/workout-screen-my-workout-list");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/exercise-screen-list");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    // Please sync "Progress screen - Main" to the project
  }, []);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/community-screen-main");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <WorkoutexercisesScreenRoot>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <ButtonWrapper onClick={onFrameContainerClick}>
        <Button>
          <Workouts>Workouts</Workouts>
        </Button>
      </ButtonWrapper>
      <WorkoutexercisesScreenInner>
        <FrameChild />
      </WorkoutexercisesScreenInner>
      <ButtonContainer onClick={onFrameContainer2Click}>
        <Button>
          <Workouts>Exercises</Workouts>
        </Button>
      </ButtonContainer>
      <Bottombar>
        <HomeIcon alt="" src="/home.svg" onClick={onHomeIconClick} />
        <WorkoutItem>
          <WorkoutexercisesIcon alt="" src="/workoutexercises1.svg" />
        </WorkoutItem>
        <VectorIcon alt="" src="/vector8.svg" onClick={onVectorIconClick} />
        <VectorIcon1 alt="" src="/vector9.svg" onClick={onVectorIcon1Click} />
        <VectorIcon2 alt="" src="/vector6.svg" onClick={onVectorIcon2Click} />
      </Bottombar>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
    </WorkoutexercisesScreenRoot>
  );
};

export default WorkoutexercisesScreen;
