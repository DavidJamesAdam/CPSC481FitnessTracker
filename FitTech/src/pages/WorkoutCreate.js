import { useCallback } from "react";
import IOSStatusBarBlack from "../components/IOSStatusBarBlack";
import InputTextActive from "../components/InputTextActive";
import { useNavigate } from "react-router-dom";
import styles from "./WorkoutCreate.module.css";

const WorkoutCreate = () => {
  const navigate = useNavigate();

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/populate-workout-list");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/community-2");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.workoutCreate}>
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
        <div className={styles.inputtextactive}>
          <div className={styles.textbox}>
            <div className={styles.enterWorkoutName}>
              Enter workout name here
            </div>
          </div>
        </div>
        <InputTextActive
          enterWorkoutNameHere="Enter workout description here"
          inputTextActiveWidth="316px"
          inputTextActivePosition="absolute"
          inputTextActiveTop="294px"
          inputTextActiveLeft="42px"
          inputTextActiveHeight="182px"
          textboxFlex="1"
        />
        <img
          className={styles.lineMdconfirmCircleTwotoneIcon}
          alt=""
          src="/linemdconfirmcircletwotone.svg"
          onClick={onLineMdconfirmCircleTwotoneClick}
        />
        <img
          className={styles.backCom2Icon}
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
      </div>
      <div className={styles.bottombar}>
        <img
          className={styles.homeIcon}
          alt=""
          src="/home2.svg"
          onClick={onHomeIconClick}
        />
        <div className={styles.workoutItem}>
          <img
            className={styles.workoutexercisesIcon}
            alt=""
            src="/workoutexercises2.svg"
          />
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector3.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="/vector4.svg"
          onClick={onVectorIcon2Click}
        />
      </div>
    </div>
  );
};

export default WorkoutCreate;
