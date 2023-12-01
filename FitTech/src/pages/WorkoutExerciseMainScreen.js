import WorkoutexercisesScreen from "../components/WorkoutexercisesScreen";
import styled from "styled-components";

const WorkoutexerciseMainScreenRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1024px;
  overflow: hidden;
`;

const WorkoutExerciseMainScreen = () => {
  return (
    <WorkoutexerciseMainScreenRoot>
      <WorkoutexercisesScreen />
    </WorkoutexerciseMainScreenRoot>
  );
};

export default WorkoutExerciseMainScreen;
