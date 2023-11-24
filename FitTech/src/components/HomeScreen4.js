import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import HomeItemSelected3 from "./HomeItemSelected3";
import WorkoutItemSelected3 from "./WorkoutItemSelected3";
import styles from "./HomeScreen4.module.css";

const HomeScreen4 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <div className={styles.logLastSetButton}>
        <div className={styles.logWorkouts}>Log Workouts</div>
      </div>
      <div className={styles.bottombar}>
        <HomeItemSelected3 />
        <WorkoutItemSelected3 onVectorIconClick={onVectorIconClick} />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIcon1Click}
        />
        <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="/vector4.svg"
          onClick={onVectorIcon3Click}
        />
      </div>
      <div className={styles.button}>
        <b className={styles.chest}>Chest</b>
      </div>
      <div className={styles.button1}>
        <b className={styles.chest}>Biceps</b>
      </div>
      <div className={styles.button2}>
        <b className={styles.chest}>Back</b>
      </div>
      <div className={styles.button3}>
        <b className={styles.b}>+</b>
      </div>
      <div className={styles.selectAWorkout}>
        Select a workout to start logging, or press “+” to create a new workout.
      </div>
    </div>
  );
};

export default HomeScreen4;
