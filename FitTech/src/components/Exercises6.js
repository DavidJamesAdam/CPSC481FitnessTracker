import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import InputTextActive from "./InputTextActive";
import InputDropdownActive from "./InputDropdownActive";
import styles from "./Exercises6.module.css";

const Exercises6 = () => {
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

  const onFrameContainer3Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  return (
    <div className={styles.exercises}>
      <div className={styles.bxx} />
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
      <div
        className={styles.saveChangesWrapper}
        onClick={onFrameContainer3Click}
      >
        <div className={styles.home}> Save Changes</div>
      </div>
      <div className={styles.tags}>
        <div className={styles.home}>Category Tags</div>
        <InputDropdownActive
          exercises="Tags"
          showPleaseSelectExercise={false}
          inputDropdownActiveWidth="105px"
          inputDropdownActiveHeight="33px"
          inputDropdownActivePosition="unset"
          inputDropdownActiveTop="unset"
          inputDropdownActiveLeft="unset"
        />
      </div>
      <div className={styles.chestTag}>
        <div className={styles.home}>#chest</div>
        <img className={styles.vectorIcon} alt="" src="/vector111.svg" />
      </div>
    </div>
  );
};

export default Exercises6;
