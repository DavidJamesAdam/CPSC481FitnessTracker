import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerForm from "./ContainerForm";
import LineMdconfirmCircleTwotone from "./LineMdconfirmCircleTwotone";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import styles from "./ExerciseForm.module.css";

const ExerciseForm = () => {
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

  const onProgressItemContainerClick = useCallback(() => {
    navigate("/progresss-screen");
  }, [navigate]);

  const onIconParkOutlineaddClick = useCallback(() => {
    navigate("/exercise-create");
  }, [navigate]);

  return (
    <div className={styles.exercises}>
      <div className={styles.letters}>
        <ContainerForm
          dimensionCode="/crunchimage@2x.png"
          onEditContainerClick={onEditContainerClick}
          onViewContainerClick={onViewContainerClick}
          onEditContainer1Click={onEditContainer1Click}
          onViewContainer1Click={onViewContainer1Click}
        />
      </div>
      <div className={styles.newWorkoutCreatedPopup}>
        <div className={styles.newWorkoutCreatedPopupChild} />
        <div className={styles.newExerciseCreated}>New exercise created!</div>
        <LineMdconfirmCircleTwotone
          lineMdconfirmCircleTwotonPosition="absolute"
          lineMdconfirmCircleTwotonTop="115px"
          lineMdconfirmCircleTwotonLeft="137px"
          lineMdconfirmCircleTwotonCursor="pointer"
          onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
        />
      </div>
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
      <div className={styles.scrollBar}>
        <div className={styles.scrollBarChild} />
        <div className={styles.scrollBarItem} />
      </div>
      <img
        className={styles.iconParkOutlineadd}
        alt=""
        src="/iconparkoutlineadd1.svg"
        onClick={onIconParkOutlineaddClick}
      />
    </div>
  );
};

export default ExerciseForm;
