import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ScrollFrame1.module.css";

const ScrollFrame1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/community-3");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/community-3");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/community-3");
  }, [navigate]);

  return (
    <div className={styles.scrollframe}>
      <div className={styles.parent} onClick={onFrameContainerClick}>
        <img className={styles.icon} alt="" src="/5-1@2x.png" />
        <div className={styles.frameChild} />
        <div className={styles.jenna}>Jenna</div>
        <div className={styles.workoutGoalAchieved}>Workout goal achieved</div>
        <div className={styles.likee} />
        <img className={styles.aIcon} alt="" src="/a.svg" />
        <img className={styles.bIcon} alt="" src="/b.svg" />
      </div>
      <div className={styles.group} onClick={onFrameContainer1Click}>
        <img className={styles.icon1} alt="" src="/5-2@2x.png" />
        <div className={styles.frameChild} />
        <div className={styles.workoutGoalAchieved}>Workout goal achieved</div>
        <div className={styles.jenna}>Yozan</div>
        <img className={styles.aIcon} alt="" src="/a.svg" />
        <img className={styles.bIcon} alt="" src="/b.svg" />
      </div>
      <div className={styles.container} onClick={onFrameContainer2Click}>
        <img className={styles.icon2} alt="" src="/5-1@2x.png" />
        <div className={styles.frameChild} />
        <div className={styles.jenna}>Jenna</div>
        <div className={styles.workoutGoalAchieved}>Workout goal achieved</div>
      </div>
    </div>
  );
};

export default ScrollFrame1;
