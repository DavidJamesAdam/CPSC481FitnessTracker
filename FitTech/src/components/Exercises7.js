import { useCallback } from "react";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import InputTextActive from "./InputTextActive";
import { useNavigate } from "react-router-dom";
import styles from "./Exercises7.module.css";

const Exercises7 = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  return (
    <div className={styles.exercises}>
      <div className={styles.navigationBar}>
        <div className={styles.homeItem}>
          <img className={styles.homeIcon} alt="" src="/home1.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <WorkoutItemNo
          workoutexercises="/workoutexercises1.svg"
          showWorkout
          workoutItemNoWidth="unset"
          workoutItemNoPadding="unset"
          workoutItemNoBoxSizing="unset"
          workoutItemNoFlex="1"
          workoutItemNoBackgroundColor="2px solid #000"
          workoutItemNoCursor="unset"
          workoutexercisesIconCursor="unset"
          workoutColor="#fff"
        />
        <div className={styles.progressItem}>
          <img className={styles.homeIcon} alt="" src="/progress.svg" />
          <div className={styles.progress}>Progress</div>
        </div>
        <div className={styles.progressItem}>
          <img className={styles.homeIcon} alt="" src="/community1.svg" />
          <div className={styles.home}>Community</div>
        </div>
        <div className={styles.progressItem}>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
          <div className={styles.settings}>Settings</div>
        </div>
      </div>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <div className={styles.exercisesChild} />
      <img
        className={styles.icroundArrowBackIosIcon}
        alt=""
        src="/icroundarrowbackios.svg"
      />
      <div className={styles.exerciseNameWrapper}>
        <div className={styles.home}>Exercise Name</div>
      </div>
      <InputTextActive
        enterWorkoutNameHere="Enter workout name here"
        inputTextActiveWidth="306px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="175px"
        inputTextActiveLeft="43px"
        inputTextActiveHeight="unset"
        textboxFlex="unset"
      />
      <InputTextActive
        enterWorkoutNameHere="Enter workout name here"
        inputTextActiveWidth="306px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="284px"
        inputTextActiveLeft="43px"
        inputTextActiveHeight="173px"
        textboxFlex="1"
      />
      <div className={styles.descriptionWrapper}>
        <div className={styles.home}>Description</div>
      </div>
      <div className={styles.uploadMediaWrapper}>
        <div className={styles.home}>Upload Media</div>
      </div>
      <img
        className={styles.materialSymbolsuploadIcon}
        alt=""
        src="/materialsymbolsupload.svg"
      />
      <div className={styles.createWrapper} onClick={onFrameContainer3Click}>
        <div className={styles.home}>Create!</div>
      </div>
    </div>
  );
};

export default Exercises7;
