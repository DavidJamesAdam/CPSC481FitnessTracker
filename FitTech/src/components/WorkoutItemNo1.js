import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutItemNo1.module.css";

const WorkoutItemNo1 = () => {
  const navigate = useNavigate();

  const onWorkoutCom2IconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.workoutItemno}>
      <div className={styles.workoutexercises}>
        <img
          className={styles.workoutCom2Icon}
          alt=""
          src="/vector1.svg"
          onClick={onWorkoutCom2IconClick}
        />
      </div>
      <div className={styles.workout}>Workout</div>
    </div>
  );
};

export default WorkoutItemNo1;
