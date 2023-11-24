import ProgressItemYes from "./ProgressItemYes";
import styles from "./ProgressForm.module.css";

const ProgressForm = () => {
  return (
    <div className={styles.bottombar}>
      <img className={styles.homeIcon} alt="" src="/home2.svg" />
      <div className={styles.workoutItemno}>
        <img className={styles.homeIcon} alt="" src="/workoutexercises.svg" />
        <div className={styles.workout}>Workout</div>
      </div>
      <ProgressItemYes />
      <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
    </div>
  );
};

export default ProgressForm;
