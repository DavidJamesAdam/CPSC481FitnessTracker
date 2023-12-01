import styled from "styled-components";

const WorkoutCom2Icon = styled.img`
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
  cursor: pointer;
`;
const WorkoutItemnoRoot = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
`;

const WorkoutItemNo1 = ({
  onWorkoutexercisesComponentContainerClick,
  onWorkoutCom2IconClick,
}) => {
  return (
    <WorkoutItemnoRoot>
      <WorkoutexercisesComponent
        onClick={onWorkoutexercisesComponentContainerClick}
      >
        <WorkoutCom2Icon
          alt=""
          src="/workoutexercises-component.svg"
          onClick={onWorkoutCom2IconClick}
        />
      </WorkoutexercisesComponent>
    </WorkoutItemnoRoot>
  );
};

export default WorkoutItemNo1;
