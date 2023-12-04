import { useState, useCallback } from "react";
import PopupFilter from "./PopupFilter";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlackIcon from "./IOSStatusBarBlackIcon";
import ExerciseList from "./ExerciseList";

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
  color: var(--color-dimgray-100);
`;
const ExercisesChild = styled.div`
  position: absolute;
  top: calc(50% - 0px);
  left: 0px;
`;
const ChestDay = styled.div`
  position: absolute;
  top: 91px;
  left: 111px;
  font-size: var(--font-size-13xl);
  text-decoration: underline;
  color: var(--white);
`;
const YourListAppears = styled.div`
  position: absolute;
  top: 152px;
  left: 55px;
  font-size: var(--font-size-xl);
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
const ExercisesItem = styled.div`
  position: absolute;
  top: 264px;
  left: 33px;
  border-radius: var(--br-8xs);
  background-color: var(--color-whitesmoke);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 132px;
  height: 36px;
`;
const Exercises11 = styled.div`
  position: absolute;
  top: 268px;
  left: 44px;
  font-size: var(--font-size-5xl);
`;
const Categories = styled.div`
  position: absolute;
  top: 206px;
  left: 36px;
  font-size: var(--font-size-5xl);
  cursor: pointer;
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
  font-size: var(--body-1-size);
  color: var(--black);
  font-family: var(--community);
`;

const Exercises2 = () => {
  const [isPopupFilterOpen, setPopupFilterOpen] = useState(false);
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
    navigate(-1);
  }, [navigate]);

  const onCategoriesTextClick = useCallback(() => {
    navigate("/workout-screen-choose-exercise-category-view");
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
      <ChestDay>Chest Day</ChestDay>
      <YourListAppears>Your list appears to be empty</YourListAppears>
      <BackCom2Icon alt="" src="/back-com2.svg" onClick={onBackCom2IconClick} />
      <ExerciseList
        showRectangleIcon={true}
        showMuscle={false}
        exerciseListHeight="565px"
        exerciseListPosition="absolute"
        exerciseListTop="196px"
        exerciseListLeft="27px"
      />
      <ExercisesItem />
      <Exercises11>Exercises</Exercises11>
      <Categories onClick={onCategoriesTextClick}>Categories</Categories>
    </ExercisesRoot>
  );
};

export default Exercises2;
