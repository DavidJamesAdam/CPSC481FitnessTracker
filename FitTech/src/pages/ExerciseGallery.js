import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Exercises3 from "../components/Exercises3";
import styles from "./ExerciseGallery.module.css";

const ExerciseGallery = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWorkoutItemContainerClick = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  return (
    <div className={styles.exerciseGallery}>
      <Exercises3 />
      <div className={styles.bottombar}>
        <img
          className={styles.homeIcon}
          alt=""
          src="/home3.svg"
          onClick={onHomeIconClick}
        />
        <div
          className={styles.workoutItem}
          onClick={onWorkoutItemContainerClick}
        >
          <img
            className={styles.workoutexercisesIcon}
            alt=""
            src="/workoutexercises3.svg"
          />
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector8.svg"
          onClick={onVectorIconClick}
        />
        <img className={styles.vectorIcon1} alt="" src="/vector91.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default ExerciseGallery;
