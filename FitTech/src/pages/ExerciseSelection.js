import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";
import styles from "./ExerciseSelection.module.css";

const ExerciseSelection = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  return (
    <div className={styles.exerciseSelection}>
      <ExerciseCard />
      <div className={styles.bottombar}>
        <img className={styles.homeIcon} alt="" src="/home2.svg" />
        <div className={styles.workoutItem}>
          <img
            className={styles.homeIcon}
            alt=""
            src="/workoutexercises2.svg"
          />
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default ExerciseSelection;
