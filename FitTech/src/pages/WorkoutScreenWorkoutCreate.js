import { useCallback } from "react";
import WorkoutContainer from "../components/WorkoutContainer";
import { useNavigate } from "react-router-dom";
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
  width: 35px;
  height: 35px;
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
const WorkoutScreenWorkoutCreatRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const WorkoutScreenWorkoutCreat = () => {
  const navigate = useNavigate();

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

  return (
    <WorkoutScreenWorkoutCreatRoot>
      <WorkoutContainer />
      <Bottombar>
        <HomeIcon alt="" src="/home.svg" onClick={onHomeIconClick} />
        <WorkoutItem>
          <WorkoutexercisesIcon alt="" src="/workoutexercises.svg" />
        </WorkoutItem>
        <VectorIcon alt="" src="/vector4.svg" onClick={onVectorIconClick} />
        <VectorIcon1 alt="" src="/vector5.svg" onClick={onVectorIcon1Click} />
        <VectorIcon2 alt="" src="/vector6.svg" onClick={onVectorIcon2Click} />
      </Bottombar>
    </WorkoutScreenWorkoutCreatRoot>
  );
};

export default WorkoutScreenWorkoutCreat;
