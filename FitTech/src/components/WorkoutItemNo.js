import { useMemo } from "react";
import styles from "./WorkoutItemNo.module.css";

const WorkoutItemNo = ({
  workoutexercises,
  showWorkout,
  workoutItemNoWidth,
  workoutItemNoPadding,
  workoutItemNoBoxSizing,
  workoutItemNoFlex,
  workoutItemNoBackgroundColor,
  workoutItemNoCursor,
  workoutexercisesIconCursor,
  workoutColor,
  onWorkoutItemNoContainerClick,
  onWorkoutexercisesIconClick,
}) => {
  const workoutItemNoStyle = useMemo(() => {
    return {
      width: workoutItemNoWidth,
      padding: workoutItemNoPadding,
      boxSizing: workoutItemNoBoxSizing,
      flex: workoutItemNoFlex,
      backgroundColor: workoutItemNoBackgroundColor,
      cursor: workoutItemNoCursor,
    };
  }, [
    workoutItemNoWidth,
    workoutItemNoPadding,
    workoutItemNoBoxSizing,
    workoutItemNoFlex,
    workoutItemNoBackgroundColor,
    workoutItemNoCursor,
  ]);

  const workoutexercisesIconStyle = useMemo(() => {
    return {
      cursor: workoutexercisesIconCursor,
    };
  }, [workoutexercisesIconCursor]);

  const workoutStyle = useMemo(() => {
    return {
      color: workoutColor,
    };
  }, [workoutColor]);

  return (
    <div
      className={styles.workoutItemno}
      style={workoutItemNoStyle}
      onClick={onWorkoutItemNoContainerClick}
    >
      <img
        className={styles.workoutexercisesIcon}
        alt=""
        src={workoutexercises}
        style={workoutexercisesIconStyle}
        onClick={onWorkoutexercisesIconClick}
      />
      {showWorkout && (
        <div className={styles.workout} style={workoutStyle}>
          Workout
        </div>
      )}
    </div>
  );
};

export default WorkoutItemNo;
