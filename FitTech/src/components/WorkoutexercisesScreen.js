import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutexercisesScreen.module.css";

const WorkoutexercisesScreen = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/workout-screen1");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/exercises");
  }, [navigate]);

  return (
    <div className={styles.workoutexercisesScreen}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <div className={styles.buttonWrapper} onClick={onFrameContainerClick}>
        <div className={styles.button}>
          <b className={styles.workouts}>Workouts</b>
        </div>
      </div>
      <div className={styles.workoutexercisesScreenInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.buttonContainer} onClick={onFrameContainer2Click}>
        <div className={styles.button}>
          <b className={styles.workouts}>Exercises</b>
        </div>
      </div>
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

export default WorkoutexercisesScreen;
