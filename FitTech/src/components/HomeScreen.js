import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import HomeItemSelected3 from "./HomeItemSelected3";
import WorkoutItemSelected3 from "./WorkoutItemSelected3";
import styles from "./HomeScreen.module.css";

const HomeScreen5 = () => {
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

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
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
        <div className={styles.bicepsBicepCurls}>Biceps: Bicep Curls</div>
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
        <b className={styles.reps}>
          <span>6</span>
          <span className={styles.reps1}> reps</span>
        </b>
      </div>
      <div className={styles.button1}>
        <b className={styles.reps}>
          <span>25</span>
          <span className={styles.reps1}> lbs</span>
        </b>
      </div>
      <div className={styles.set1}>{`Set 1: `}</div>
      <div className={styles.loggingCompletePlease}>
        Logging complete. Please select “Next Set” or “Next Exercise” to
        continue.
      </div>
      <div className={styles.button2}>
        <b className={styles.reps}>
          <p className={styles.next}>Next</p>
          <p className={styles.next}>Set</p>
        </b>
      </div>
      <div className={styles.button3}>
        <b className={styles.reps}>
          <p className={styles.next}>Next</p>
          <p className={styles.next}>Exercise</p>
        </b>
      </div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
    </div>
  );
};

export default HomeScreen5;
