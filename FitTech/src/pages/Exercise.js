import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Exercises8 from "../components/Exercises8";
import styles from "./Exercise.module.css";

const Exercise = () => {
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

  return (
    <div className={styles.exercise}>
      <Exercises8 />
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

export default Exercise;
