import styled from "styled-components";

const WorkoutexercisesComponentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const WorkoutItemnoRoot = styled.div`width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
  width: ${(p) => p.workoutItemNoWidth};
  padding: ${(p) => p.workoutItemNoPadding};
  box-sizing: ${(p) => p.workoutItemNoBoxSizing};
  flex: ${(p) => p.workoutItemNoFlex};
  background-color: ${(p) => p.workoutItemNoBackgroundColor};
  cursor: ${(p) => p.workoutItemNoCursor};
`;

const WorkoutItemNo = ({
  workoutexercisesComponent,
  workoutItemNoWidth,
  workoutItemNoPadding,
  workoutItemNoBoxSizing,
  workoutItemNoFlex,
  workoutItemNoBackgroundColor,
  workoutItemNoCursor,
  onWorkoutItemNoContainerClick,
  onWorkoutexercisesComponentIconClick,
}) => {
  return (
    <WorkoutItemnoRoot
      workoutItemNoWidth={workoutItemNoWidth}
      workoutItemNoPadding={workoutItemNoPadding}
      workoutItemNoBoxSizing={workoutItemNoBoxSizing}
      workoutItemNoFlex={workoutItemNoFlex}
      workoutItemNoBackgroundColor={workoutItemNoBackgroundColor}
      workoutItemNoCursor={workoutItemNoCursor}
      onClick={onWorkoutItemNoContainerClick}
    >
      <WorkoutexercisesComponentIcon
        alt=""
        src={workoutexercisesComponent}
        onClick={onWorkoutexercisesComponentIconClick}
      />
    </WorkoutItemnoRoot>
  );
};

export default WorkoutItemNo;
