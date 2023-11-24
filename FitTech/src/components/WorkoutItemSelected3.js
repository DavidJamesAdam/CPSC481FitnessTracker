import styles from "./WorkoutItemSelected3.module.css";

const WorkoutItemSelected3 = ({ onVectorIconClick }) => {
  return (
    <div className={styles.workoutItemselected3}>
      <div className={styles.workoutexercises}>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
      </div>
    </div>
  );
};

export default WorkoutItemSelected3;
