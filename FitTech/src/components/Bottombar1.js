import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WorkoutItemNo from "./WorkoutItemNo";
import SelectedYes from "./SelectedYes";

const HomeCom3Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  cursor: pointer;
`;
const Home = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProgressCom3Icon = styled.img`
  position: relative;
  width: 28.9px;
  height: 30px;
  cursor: pointer;
`;
const SettingsCom3Icon = styled.img`
  position: relative;
  width: 31.3px;
  height: 32.7px;
  cursor: pointer;
`;
const BottombarRoot = styled.div`
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

const Bottombar1 = () => {
  const navigate = useNavigate();

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onHomeCom3IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProgressCom3IconClick = useCallback(() => {
    // Please sync "Progress screen - Main" to the project
  }, []);

  const onSettingsCom3IconClick = useCallback(() => {
    navigate("/settings-screen-main");
  }, [navigate]);

  return (
    <BottombarRoot>
      <Home>
        <HomeCom3Icon
          alt=""
          src="/home-com3.svg"
          onClick={onHomeCom3IconClick}
        />
      </Home>
      <WorkoutItemNo
        workoutexercisesComponent="/workoutexercises-component.svg"
        workoutItemNoWidth="56px"
        workoutItemNoPadding="var(--padding-mini) 0px"
        workoutItemNoBoxSizing="border-box"
        workoutItemNoFlex="unset"
        workoutItemNoBackgroundColor="unset"
        workoutItemNoCursor="unset"
        onWorkoutexercisesComponentIconClick={
          onWorkoutexercisesComponentIconClick
        }
      />
      <ProgressCom3Icon
        alt=""
        src="/vector8.svg"
        onClick={onProgressCom3IconClick}
      />
      <SelectedYes
        communityComponent="/community-component2.svg"
        showCommunity={false}
        selectedYesWidth="51px"
        selectedYesHeight="43px"
        selectedYesCursor="pointer"
        onCommunityItemContainerClick={onCommunityItemContainerClick}
      />
      <SettingsCom3Icon
        alt=""
        src="/vector6.svg"
        onClick={onSettingsCom3IconClick}
      />
    </BottombarRoot>
  );
};

export default Bottombar1;
