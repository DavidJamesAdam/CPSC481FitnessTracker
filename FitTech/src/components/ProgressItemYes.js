import styles from "./ProgressItemYes.module.css";

const ProgressItemYes = () => {
  return (
    <div className={styles.progressItemyes}>
      <img className={styles.progressIcon} alt="" src="/progress1.svg" />
      <div className={styles.progress}>Progress</div>
    </div>
  );
};

export default ProgressItemYes;
