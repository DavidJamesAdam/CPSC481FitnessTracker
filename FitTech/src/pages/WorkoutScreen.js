import { useCallback } from "react";
import WorkoutContainer from "../components/WorkoutContainer";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutScreen.module.css";

const WorkoutScreen = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/community-2");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.workoutScreen}>
      <WorkoutContainer />
      <div className={styles.bottombar}>
        <img
          className={styles.homeIcon}
          alt=""
          src="/home2.svg"
          onClick={onHomeIconClick}
        />
        <div className={styles.workoutItem}>
          <img
            className={styles.workoutexercisesIcon}
            alt=""
            src="/workoutexercises2.svg"
          />
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector3.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="/vector4.svg"
          onClick={onVectorIcon2Click}
        />
      </div>
    </div>
  );
};

export default WorkoutScreen;
