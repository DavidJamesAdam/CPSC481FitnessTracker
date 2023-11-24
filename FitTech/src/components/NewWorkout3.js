import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import Vaadinbutton from "./Vaadinbutton";
import { useNavigate } from "react-router-dom";
import styles from "./NewWorkout3.module.css";

const NewWorkout3 = () => {
  const navigate = useNavigate();

  const onIconParkOutlineaddClick = useCallback(() => {
    navigate("/choose-exercise-category-view");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-edit");
  }, [navigate]);

  return (
    <div className={styles.newWorkout}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <div className={styles.chestDay}>Chest Day</div>
      <div className={styles.yourListAppears}>
        Your list appears to be empty
      </div>
      <Vaadinbutton />
      <img
        className={styles.iconParkOutlineadd}
        alt=""
        src="/iconparkoutlineadd1.svg"
        onClick={onIconParkOutlineaddClick}
      />
      <div className={styles.newWorkoutChild} />
      <div className={styles.finish}>Finish</div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <img
        className={styles.uileditIcon}
        alt=""
        src="/uiledit.svg"
        onClick={onUileditIconClick}
      />
    </div>
  );
};

export default NewWorkout3;
