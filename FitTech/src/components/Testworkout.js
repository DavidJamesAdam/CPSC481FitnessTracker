import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormContainer from "./FormContainer";

const IosstatusBarblackIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 392px;
  height: 43.3px;
  overflow: hidden;
`;
const Community = styled.b`
  position: absolute;
  top: 63px;
  left: 18px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 16px;
`;
const Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 411px;
  height: 204px;
  object-fit: cover;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 138px;
  left: 0px;
  background-color: var(--white);
  width: 313px;
  height: 42px;
`;
const Jenna = styled.div`
  position: absolute;
  top: 149px;
  left: 11px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 46px;
  height: 20px;
`;
const WorkoutGoalAchieved = styled.div`
  position: absolute;
  top: 149px;
  left: 133px;
  letter-spacing: 0.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  width: 163px;
  height: 20px;
`;
const Likee = styled.div`
  position: absolute;
  top: 11px;
  left: 286px;
  width: 20.7px;
  height: 20.2px;
`;
const AIcon = styled.img`
  position: absolute;
  height: 11.22%;
  width: 4.95%;
  top: 82.78%;
  right: 66.23%;
  bottom: 6%;
  left: 28.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BIcon = styled.img`
  position: absolute;
  height: 8.39%;
  width: 2.08%;
  top: 85%;
  right: 70.77%;
  bottom: 6.61%;
  left: 27.16%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 79px;
  left: 30px;
  border: 1px solid var(--white);
  box-sizing: border-box;
  width: 313px;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
`;
const Icon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 500px;
  height: 333px;
  object-fit: cover;
`;
const Group = styled.div`
  position: absolute;
  top: 341px;
  left: 30px;
  border: 1px solid var(--white);
  box-sizing: border-box;
  width: 313px;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
`;
const Container = styled.div`
  position: absolute;
  top: 584px;
  left: 30px;
  border: 1px solid var(--white);
  box-sizing: border-box;
  width: 313px;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
`;
// ... (previous imports)

const Scrollframe1 = styled.div`
  position: absolute;
  top: 145px; /* Adjust the top position to create a 10-pixel gap */
  left: 10px;
  width: 375px;
  height: 600px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--community-size);
  color: var(--black);
  padding-top: 0px;
`;

// ... (rest of your component)

const TestworkoutChild = styled.div`
  position: absolute;
  top: 90px;
  left: 310px;
  border-radius: 50%;
  background-color: var(--white);
  width: 45px;
  height: 45px;
  cursor: pointer;
`;
const TestworkoutItem = styled.div`
  position: absolute;
  top: 104.5px;
  left: 331.5px;
  border-right: 1px solid var(--black);
  box-sizing: border-box;
  width: 1px;
  height: 17px;
`;
const TestworkoutInner = styled.div`
  position: absolute;
  top: 112.5px;
  left: 323.5px;
  border-top: 1px solid var(--black);
  box-sizing: border-box;
  width: 18px;
  height: 1px;
`;
const BackCom2Icon = styled.img`
  position: absolute;
  top: 102px;
  left: 34px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const TestworkoutRoot = styled.div`
  position: absolute;
  top: 85px;
  left: 523px;
  background-color: var(--color-darkslategray);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 394px;
  height: 854px;
  overflow: hidden;
  mix-blend-mode: normal;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--community);
`;

const Testworkout = () => {
  const navigate = useNavigate();

  const onHomeCom2IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWorkoutexercisesComponentContainerClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onWorkoutCom2IconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressCom2IconClick = useCallback(() => {
    // Please sync "Progress screen - Main" to the project
  }, []);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onSettingsCom2IconClick = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/community-3");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/community-3");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/community-3");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <TestworkoutRoot>
      <IosstatusBarblackIcon1 alt="" src="/iosstatus-barblack1.svg" />
      <Community>Community</Community>
      <Scrollframe1>
        <Parent1 onClick={onFrameContainerClick}>
          <Icon alt="" src="/5-1@2x.png" />
          <FrameChild />
          <Jenna>Jenna</Jenna>
          <WorkoutGoalAchieved>Workout goal achieved</WorkoutGoalAchieved>
          <Likee />
          <AIcon alt="" src="/a.svg" />
          <BIcon alt="" src="/b.svg" />
        </Parent1>
        <Group onClick={onFrameContainer1Click}>
          <Icon1 alt="" src="/5-2@2x.png" />
          <FrameChild />
          <WorkoutGoalAchieved>Workout goal achieved</WorkoutGoalAchieved>
          <Jenna>Yozan</Jenna>
          <AIcon alt="" src="/a.svg" />
          <BIcon alt="" src="/b.svg" />
        </Group>
        <Container onClick={onFrameContainer2Click}>
          <Icon alt="" src="/5-1@2x.png" />
          <FrameChild />
          <Jenna>Jenna</Jenna>
          <WorkoutGoalAchieved>Workout goal achieved</WorkoutGoalAchieved>
        </Container>
      </Scrollframe1>
      <TestworkoutChild onClick={onEllipseClick} />
      <TestworkoutItem />
      <TestworkoutInner />
      <FormContainer
        onHomeCom2IconClick={onHomeCom2IconClick}
        onWorkoutexercisesComponentContainerClick={
          onWorkoutexercisesComponentContainerClick
        }
        onWorkoutCom2IconClick={onWorkoutCom2IconClick}
        onProgressCom2IconClick={onProgressCom2IconClick}
        onCommunityItemContainerClick={onCommunityItemContainerClick}
        onSettingsCom2IconClick={onSettingsCom2IconClick}
      />
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
    </TestworkoutRoot>
  );
};

export default Testworkout;
