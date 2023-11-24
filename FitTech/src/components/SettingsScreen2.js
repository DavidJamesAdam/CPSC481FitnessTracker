import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsScreen2.module.css";

const SettingsScreen2 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  return (
    <div className={styles.settingsScreen}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <div className={styles.bottombar}>
        <img className={styles.homeIcon} alt="" src="/home2.svg" />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector5.svg"
          onClick={onVectorIconClick}
        />
        <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
        <div className={styles.settingsItem}>
          <img className={styles.settingsIcon} alt="" src="/settings1.svg" />
        </div>
      </div>
      <div className={styles.settingsScreenChild} />
      <b className={styles.user1234}>user1234</b>
      <img className={styles.profilePicIcon} alt="" src="/profilepic1.svg" />
      <div className={styles.account}>
        <div className={styles.accountChild} />
        <div className={styles.accountWrapper}>
          <div className={styles.help}>Account</div>
        </div>
        <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
      </div>
      <div className={styles.account2}>
        <div className={styles.accountChild} />
        <div className={styles.accountWrapper}>
          <div className={styles.help}>Help</div>
        </div>
        <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
      </div>
    </div>
  );
};

export default SettingsScreen2;
