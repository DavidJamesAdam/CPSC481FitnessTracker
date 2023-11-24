import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LineMdconfirmCircleTwotone from "./LineMdconfirmCircleTwotone";
import styles from "./WorkoutUpdated.module.css";

const WorkoutUpdated = () => {
  const navigate = useNavigate();

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/workout-screen");
  }, [navigate]);

  return (
    <div className={styles.workoutUpdated}>
      <div className={styles.workoutUpdatedChild} />
      <div className={styles.workoutUpdated1}>Workout updated!</div>
      <LineMdconfirmCircleTwotone
        lineMdconfirmCircleTwotonPosition="absolute"
        lineMdconfirmCircleTwotonTop="115px"
        lineMdconfirmCircleTwotonLeft="137px"
        lineMdconfirmCircleTwotonCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
    </div>
  );
};

export default WorkoutUpdated;
