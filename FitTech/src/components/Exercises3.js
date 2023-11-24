import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import styles from "./Exercises3.module.css";

const Exercises3 = () => {
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
      <div className={styles.exercisesChild} />
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <div className={styles.exercisesItem} />
      <b className={styles.barbellBench}>Barbell Bench</b>
      <b className={styles.gallery}>Gallery</b>
      <div className={styles.gallery1}>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <img className={styles.image7Icon} alt="" src="/image-5@2x.png" />
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          <img className={styles.image8Icon} alt="" src="/image-6@2x.png" />
          <img className={styles.image4Icon1} alt="" src="/image-4@2x.png" />
        </div>
      </div>
      <div className={styles.upload}>
        <div className={styles.uploadMediaWrapper}>
          <div className={styles.home}>Upload Media</div>
        </div>
        <img
          className={styles.materialSymbolsuploadIcon}
          alt=""
          src="/materialsymbolsupload.svg"
        />
      </div>
    </div>
  );
};

export default Exercises3;
