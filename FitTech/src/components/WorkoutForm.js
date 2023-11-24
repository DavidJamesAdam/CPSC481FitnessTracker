import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import InputTextActive from "./InputTextActive";
import LineMdconfirmCircleTwotone from "./LineMdconfirmCircleTwotone";
import styles from "./WorkoutForm.module.css";

const WorkoutForm = () => {
  const navigate = useNavigate();

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/populate-workout-list");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
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
      <div className={styles.workoutName}>Workout Name</div>
      <div className={styles.workoutDescriptionOptional}>
        Workout Description (Optional)
      </div>
      <InputTextActive
        enterWorkoutNameHere="Enter workout name here"
        inputTextActiveWidth="200px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="152px"
        inputTextActiveLeft="96px"
        inputTextActiveHeight="unset"
        textboxFlex="unset"
      />
      <InputTextActive
        enterWorkoutNameHere="Enter workout description here"
        inputTextActiveWidth="316px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="294px"
        inputTextActiveLeft="42px"
        inputTextActiveHeight="182px"
        textboxFlex="1"
      />
      <LineMdconfirmCircleTwotone
        lineMdconfirmCircleTwotonPosition="absolute"
        lineMdconfirmCircleTwotonTop="680px"
        lineMdconfirmCircleTwotonLeft="299px"
        lineMdconfirmCircleTwotonCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
    </div>
  );
};

export default WorkoutForm;
