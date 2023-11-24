import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutContainer.module.css";

const WorkoutContainer = () => {
  const navigate = useNavigate();

  const onIconParkOutlineaddClick = useCallback(() => {
    navigate("/new-workout");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/populate-workout-list1");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-edit");
  }, [navigate]);

  return (
    <div className={styles.workoutScreen}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <img
        className={styles.iconParkOutlineadd}
        alt=""
        src="/iconparkoutlineadd1.svg"
        onClick={onIconParkOutlineaddClick}
      />
      <div className={styles.myWorkouts}>My Workouts</div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <div className={styles.workoutScreenChild} onClick={onRectangleClick} />
      <div className={styles.chestDay}>Chest Day</div>
      <img
        className={styles.uileditIcon}
        alt=""
        src="/uiledit.svg"
        onClick={onUileditIconClick}
      />
    </div>
  );
};

export default WorkoutContainer;
