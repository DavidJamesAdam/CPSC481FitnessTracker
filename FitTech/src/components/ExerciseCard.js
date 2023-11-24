import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import Property1Default from "./Property1Default";
import styles from "./ExerciseCard.module.css";

const ExerciseCard = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onProgressItemContainerClick = useCallback(() => {
    navigate("/progresss-screen");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <div className={styles.exercises}>
      <div className={styles.exercisesChild} />
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
          workoutItemNoCursor="pointer"
          workoutexercisesIconCursor="unset"
          workoutColor="#fff"
          onWorkoutItemNoContainerClick={onWorkoutItemNoContainerClick}
        />
        <div
          className={styles.progressItem}
          onClick={onProgressItemContainerClick}
        >
          <img className={styles.homeIcon} alt="" src="/progress.svg" />
          <div className={styles.progress}>Progress</div>
        </div>
        <div className={styles.communityItem}>
          <img className={styles.homeIcon} alt="" src="/community1.svg" />
          <div className={styles.home}>Community</div>
        </div>
        <div className={styles.communityItem}>
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
      <div className={styles.exercisesItem} />
      <div className={styles.scrollBar}>
        <div className={styles.scrollBarChild} />
        <div className={styles.scrollBarItem} />
      </div>
      <div className={styles.chestDay}>Chest Day</div>
      <div className={styles.yourListAppears}>
        Your list appears to be empty
      </div>
      <img className={styles.mdifilterIcon} alt="" src="/mdifilter1.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <img className={styles.exercisesInner} alt="" src="/rectangle-27.svg" />
      <div className={styles.chest}>Chest</div>
      <Property1Default aTop="295px" />
    </div>
  );
};

export default ExerciseCard;
