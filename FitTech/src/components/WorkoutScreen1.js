import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutScreen1.module.css";

const WorkoutScreen1 = () => {
  const navigate = useNavigate();

  const onIconParkOutlineaddClick = useCallback(() => {
    navigate("/new-workout");
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
      <div className={styles.yourListIs}>Your list is empty</div>
      <img
        className={styles.uileditIcon}
        alt=""
        src="/uiledit.svg"
        onClick={onUileditIconClick}
      />
    </div>
  );
};

export default WorkoutScreen1;
