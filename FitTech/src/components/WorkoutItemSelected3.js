import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const VectorIcon = styled.img`
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
const WorkoutexercisesComponent = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const WorkoutItemselected3Root = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
`;

const WorkoutItemSelected3 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise-main-screen");
  }, [navigate]);

  return (
    <WorkoutItemselected3Root>
      <WorkoutexercisesComponent>
        <VectorIcon
          alt=""
          src="/workoutexercises-component.svg"
          onClick={onVectorIconClick}
        />
      </WorkoutexercisesComponent>
    </WorkoutItemselected3Root>
  );
};

export default WorkoutItemSelected3;
