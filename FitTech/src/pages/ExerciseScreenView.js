import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Exercises3 from "../components/Exercises3";
import styled from "styled-components";

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
  top: 869px;
  left: 523px;
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
const ExerciseScreenViewRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const ExerciseScreenView = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onWorkoutexercisesComponentIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
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

  const { state } = useLocation();
  const exerciseName = state?.data;

  return (
    <ExerciseScreenViewRoot>
      <Exercises3 exerciseName={exerciseName}/>
      <Bottombar>
        <HomeIcon alt="" src="/home1.svg" onClick={onHomeIconClick} />
        <WorkoutItem>
          <WorkoutexercisesIcon alt="" src="/workoutexercises1.svg" />
        </WorkoutItem>
        <VectorIcon alt="" src="/vector8.svg" onClick={onVectorIconClick} />
        <VectorIcon1 alt="" src="/vector9.svg" onClick={onVectorIcon1Click} />
        <VectorIcon2 alt="" src="/vector6.svg" onClick={onVectorIcon2Click} />
      </Bottombar>
    </ExerciseScreenViewRoot>
  );
};

export default ExerciseScreenView;
