import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Exercises5 from "../components/Exercises5";
import styles from "./ExerciseView.module.css";

const ExerciseView = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.exerciseView}>
      <Exercises5 />
      <div className={styles.bottombar}>
        <img
          className={styles.homeIcon}
          alt=""
          src="/home3.svg"
          onClick={onHomeIconClick}
        />
        <div className={styles.workoutItem}>
          <img
            className={styles.workoutexercisesIcon}
            alt=""
            src="/workoutexercises3.svg"
          />
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector91.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default ExerciseView;
