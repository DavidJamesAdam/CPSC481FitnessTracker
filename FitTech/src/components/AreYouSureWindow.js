import LineMdconfirmCircleTwotone from "./LineMdconfirmCircleTwotone";
import styles from "./AreYouSureWindow.module.css";

const AreYouSureWindow = () => {
  return (
    <div className={styles.areYouSureWindow}>
      <div className={styles.areYouSureWindowChild} />
      <div className={styles.areYouSureContainer}>
        <p className={styles.areYouSure}>Are you sure you</p>
        <p className={styles.areYouSure}> want to delete workout?</p>
      </div>
      <LineMdconfirmCircleTwotone
        lineMdconfirmCircleTwotonPosition="absolute"
        lineMdconfirmCircleTwotonTop="115px"
        lineMdconfirmCircleTwotonLeft="42px"
        lineMdconfirmCircleTwotonCursor="unset"
      />
      <img
        className={styles.materialSymbolscancelOutlinIcon}
        alt=""
        src="/materialsymbolscanceloutline.svg"
      />
    </div>
  );
};

export default AreYouSureWindow;
