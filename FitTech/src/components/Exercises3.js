import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";

const HomeComponentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Home = styled.div`
  position: relative;
`;
const HomeItem = styled.div`
  flex: 1;
  background-color: var(--white);
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Progress = styled.div`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 18px;
  flex-shrink: 0;
`;
const ProgressItem = styled.div`
  flex: 1;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const CommunityItem = styled.div`
  flex: 1;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SettingsComponentIcon = styled.img`
  position: relative;
  width: 35.7px;
  height: 37.3px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Settings = styled.div`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 15px;
  flex-shrink: 0;
`;
const NavigationBar = styled.div`
  position: absolute;
  top: 776px;
  left: 0px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 393px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  font-size: var(--body-1-size);
  color: var(--black);
`;
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
const ExercisesChild = styled.div`
  position: absolute;
  top: calc(50% - 0px);
  left: 0px;
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
const ExercisesItem = styled.div`
  position: absolute;
  top: 147px;
  left: 44px;
`;
const BarbellBenchIcon = styled.img`
  position: absolute;
  top: 122px;
  left: 66px;
  border-radius: var(--br-xl);
  width: 259px;
  height: 232px;
  object-fit: cover;
`;
const BarbellBench = styled.b`
  position: absolute;
  top: 78px;
  left: 124px;
`;
const Description = styled.b`
  position: absolute;
  top: 361px;
  left: 11px;
  font-family: var(--input-field-label);
`;
const BarbellBenchChild = styled.div`
  position: absolute;
  top: -28px;
  left: -5px;
  border-radius: var(--br-10xs);
  background-color: var(--color-slategray-200);
  border: 5px solid var(--black);
  box-sizing: border-box;
  width: 382px;
  height: 87px;
`;
const BarbellBench1 = styled.div`
  position: absolute;
  top: 417px;
  left: 11px;
  width: 372px;
  height: 87px;
`;
const Gallery1 = styled.b`
  position: absolute;
  top: -48px;
  left: -23px;
  text-decoration: underline;
  cursor: pointer;
`;
const Image4Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 107px;
  height: 107px;
  object-fit: cover;
`;
const Image5Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 121px;
  border-radius: var(--br-xl);
  width: 107px;
  height: 107px;
  object-fit: cover;
`;
const Image7Icon = styled.img`
  position: absolute;
  top: 121px;
  left: 0px;
  border-radius: var(--br-xl);
  width: 107px;
  height: 107px;
  object-fit: cover;
`;
const Image6Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 242px;
  border-radius: var(--br-xl);
  width: 107px;
  height: 107px;
  object-fit: cover;
`;
const Image8Icon = styled.img`
  position: absolute;
  top: 121px;
  left: 120px;
  border-radius: var(--br-xl);
  width: 107px;
  height: 107px;
  object-fit: cover;
`;
const Image4Icon1 = styled.img`
  position: absolute;
  top: 121px;
  left: 242px;
  border-radius: var(--br-xl);
  width: 107px;
  height: 107px;
  object-fit: cover;
`;
const Image4Parent = styled.div`
  position: absolute;
  top: -23px;
  left: -11px;
  width: 348px;
  height: 233px;
`;
const Gallery = styled.div`
  position: absolute;
  top: 548px;
  left: 35px;
  width: 107px;
  height: 61px;
`;
const ThisIsA = styled.div`
  position: absolute;
  top: 394px;
  left: 12px;
  font-size: var(--community-size);
  font-family: var(--input-field-label);
  display: inline-block;
  width: 371px;
  height: 77px;
`;
const ExercisesRoot = styled.div`
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
  font-size: var(--font-size-3xl);
  color: var(--white);
  font-family: var(--community);
`;

const Exercises3 = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onProgressItemContainerClick = useCallback(() => {
    // Please sync "Progresss screen" to the project
  }, []);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/exercise-screen-gallery");
  }, [navigate]);

  return (
    <ExercisesRoot>
      <NavigationBar>
        <HomeItem>
          <HomeComponentIcon alt="" src="/home-component.svg" />
          <Home>Home</Home>
        </HomeItem>
        <WorkoutItemNo
          workoutexercisesComponent="/workoutexercises-component1.svg"
          workoutItemNoWidth="unset"
          workoutItemNoPadding="unset"
          workoutItemNoBoxSizing="unset"
          workoutItemNoFlex="1"
          workoutItemNoBackgroundColor="1px solid #000"
          workoutItemNoCursor="pointer"
          onWorkoutItemNoContainerClick={onWorkoutItemNoContainerClick}
          onWorkoutexercisesComponentIconClick={
            onWorkoutexercisesComponentIconClick
          }
        />
        <ProgressItem onClick={onProgressItemContainerClick}>
          <HomeComponentIcon alt="" src="/progress-component.svg" />
          <Progress>Progress</Progress>
        </ProgressItem>
        <CommunityItem>
          <HomeComponentIcon alt="" src="/community-component1.svg" />
          <Home>Community</Home>
        </CommunityItem>
        <CommunityItem>
          <SettingsComponentIcon alt="" src="/settings-component1.svg" />
          <Settings>Settings</Settings>
        </CommunityItem>
      </NavigationBar>
      <IosstatusBarblack>
        <IosstatusBarblack1>iOS/Status Bar/Black</IosstatusBarblack1>
        <IOSStatusBarBlackIcon />
      </IosstatusBarblack>
      <ExercisesChild />
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <ExercisesItem />
      <BarbellBenchIcon alt="" src="/barbell-bench1@2x.png" />
      <BarbellBench>Barbell Bench</BarbellBench>
      <Description>Description</Description>
      <BarbellBench1>
        <BarbellBenchChild />
      </BarbellBench1>
      <Gallery>
        <Gallery1 onClick={onGalleryTextClick}>{`Gallery >`}</Gallery1>
        <Image4Parent>
          <Image4Icon alt="" src="/image-4@2x.png" />
          <Image5Icon alt="" src="/image-5@2x.png" />
          <Image7Icon alt="" src="/image-5@2x.png" />
          <Image6Icon alt="" src="/image-6@2x.png" />
          <Image8Icon alt="" src="/image-6@2x.png" />
          <Image4Icon1 alt="" src="/image-4@2x.png" />
        </Image4Parent>
      </Gallery>
      <ThisIsA>This is a description</ThisIsA>
    </ExercisesRoot>
  );
};

export default Exercises3;
