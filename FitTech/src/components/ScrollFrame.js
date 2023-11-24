import styles from "./ScrollFrame.module.css";

const ScrollFrame = () => {
  return (
    <div className={styles.scrollframe}>
      <img className={styles.likeeIcon} alt="" src="/likee1.svg" />
      <div className={styles.jennaSwitzer}>Jenna Switzer</div>
      <div className={styles.workoutName}>{`Workout Name `}</div>
      <div className={styles.workoutGoalAchieved}>Workout Goal achieved</div>
      <div className={styles.timeTakenTo}>Time taken to achieve the target</div>
      <div className={styles.div}>13</div>
      <img className={styles.icon} alt="" src="/5-3@2x.png" />
    </div>
  );
};

export default ScrollFrame;
