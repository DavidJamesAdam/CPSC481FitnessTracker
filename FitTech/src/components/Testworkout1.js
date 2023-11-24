import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScrollFrame1 from "./ScrollFrame1";
import Bottombar1 from "./Bottombar1";
import styles from "./Testworkout1.module.css";

const Testworkout1 = () => {
  const navigate = useNavigate();

  const onHomeCom2IconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWorkoutCom2IconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onProgressCom2IconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onSettingsCom2IconClick = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  const onLine1Click = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <div className={styles.testworkout}>
      <img
        className={styles.iosstatusBarblackIcon}
        alt=""
        src="/iosstatus-barblack1.svg"
      />
      <b className={styles.community}>Community</b>
      <ScrollFrame1 />
      <div className={styles.testworkoutChild} />
      <div className={styles.testworkoutItem} />
      <div className={styles.testworkoutInner} onClick={onLine1Click} />
      <Bottombar1
        onHomeCom2IconClick={onHomeCom2IconClick}
        onWorkoutCom2IconClick={onWorkoutCom2IconClick}
        onProgressCom2IconClick={onProgressCom2IconClick}
        onCommunityItemContainerClick={onCommunityItemContainerClick}
        onSettingsCom2IconClick={onSettingsCom2IconClick}
      />
    </div>
  );
};

export default Testworkout1;
