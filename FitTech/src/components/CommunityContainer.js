import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Bottombar1 from "./Bottombar1";
import styles from "./CommunityContainer.module.css";

const CommunityContainer = () => {
  const navigate = useNavigate();

  const onHomeComIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWorkoutComIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onProgressIconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onSettingsIconClick = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onShareIconClick = useCallback(() => {
    navigate("/community-2");
  }, [navigate]);

  return (
    <div className={styles.testworkout}>
      <img
        className={styles.iosstatusBarblackIcon}
        alt=""
        src="/iosstatus-barblack1.svg"
      />
      <Bottombar1
        bottombarCursor="unset"
        onHomeCom2IconClick={onHomeComIconClick}
        onWorkoutCom2IconClick={onWorkoutComIconClick}
        onProgressCom2IconClick={onProgressIconClick}
        onSettingsCom2IconClick={onSettingsIconClick}
      />
      <div className={styles.textFieldFillParent}>
        <div className={styles.textFieldFill}>
          <div className={styles.workoutType}>Workout Type</div>
          <div className={styles.input} />
        </div>
        <div className={styles.textFieldFill1}>
          <div className={styles.workoutType}>Workout Average</div>
          <div className={styles.input} />
        </div>
        <div className={styles.textFieldFill2}>
          <div className={styles.workoutType}>Sets Today</div>
          <div className={styles.input} />
        </div>
        <div className={styles.textFieldFill3}>
          <div className={styles.workoutType}>Sets Average</div>
          <div className={styles.input} />
        </div>
        <div className={styles.textFieldFill4}>
          <div className={styles.workoutType}>Workout Today</div>
          <div className={styles.input} />
        </div>
        <div className={styles.textFieldFill5}>
          <div className={styles.workoutType}>Workout Target achieved:</div>
        </div>
        <div className={styles.div}>70%</div>
      </div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <b className={styles.community}>Community</b>
      <div className={styles.testworkoutChild} />
      <img
        className={styles.shareIcon}
        alt=""
        src="/share@2x.png"
        onClick={onShareIconClick}
      />
    </div>
  );
};

export default CommunityContainer;
