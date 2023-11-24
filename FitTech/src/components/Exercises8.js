import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerForm from "./ContainerForm";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import styles from "./Exercises8.module.css";

const Exercises8 = () => {
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

  const onIconParkOutlineaddClick = useCallback(() => {
    navigate("/exercise-create");
  }, [navigate]);

  return (
    <div className={styles.exercises}>
      <div className={styles.letters}>
        <ContainerForm
          dimensionCode="/crunchimage2@2x.png"
          onEditContainerClick={onEditContainerClick}
          onViewContainerClick={onViewContainerClick}
          onEditContainer1Click={onEditContainer1Click}
          onViewContainer1Click={onViewContainer1Click}
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
      <div className={styles.scrollBar}>
        <div className={styles.scrollBarChild} />
        <div className={styles.scrollBarItem} />
      </div>
      <img
        className={styles.iconParkOutlineadd}
        alt=""
        src="/iconparkoutlineadd2.svg"
        onClick={onIconParkOutlineaddClick}
      />
    </div>
  );
};

export default Exercises8;
