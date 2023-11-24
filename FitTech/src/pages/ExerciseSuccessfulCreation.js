import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseForm from "../components/ExerciseForm";
import styles from "./ExerciseSuccessfulCreation.module.css";

const ExerciseSuccessfulCreation = () => {
  const navigate = useNavigate();

  const onEditContainerClick = useCallback(() => {
    navigate("/exercise-edit");
  }, [navigate]);

  const onViewContainerClick = useCallback(() => {
    navigate("/exercise-view");
  }, [navigate]);

  const onEditContainer1Click = useCallback(() => {
    navigate("/exercise-edit");
  }, [navigate]);

  const onViewContainer1Click = useCallback(() => {
    navigate("/exercise-view");
  }, [navigate]);

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/populate-workout-list");
  }, [navigate]);

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  return (
    <div className={styles.exerciseSuccessfulCreation}>
      <ExerciseForm />
      <div className={styles.bottombar}>
        <img className={styles.homeIcon} alt="" src="/home2.svg" />
        <div className={styles.workoutItem}>
          <img
            className={styles.homeIcon}
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

export default ExerciseSuccessfulCreation;
