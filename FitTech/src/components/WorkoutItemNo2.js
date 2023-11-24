import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutItemNo2.module.css";

const WorkoutItemNo2 = () => {
  const navigate = useNavigate();

  const onWorkoutComIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.workoutItemno}>
      <div className={styles.workoutexercises}>
        <img
          className={styles.workoutComIcon}
          alt=""
          src="/vector1.svg"
          onClick={onWorkoutComIconClick}
        />
      </div>
      <div className={styles.workout}>Workout</div>
    </div>
  );
};

export default WorkoutItemNo2;
