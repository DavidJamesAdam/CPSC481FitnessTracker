import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsScreen1.module.css";

const SettingsScreen1 = () => {
  const navigate = useNavigate();

  const onVectorIcon5Click = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onAccountContainer2Click = useCallback(() => {
    navigate("/settings-account");
  }, [navigate]);

  const onAccountContainer3Click = useCallback(() => {
    navigate("/settings-help");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
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
          onClick={onVectorIcon5Click}
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
      <div className={styles.account} onClick={onAccountContainer2Click}>
        <div className={styles.accountChild} />
        <div className={styles.accountWrapper}>
          <div className={styles.help}>Account</div>
        </div>
        <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
      </div>
      <div className={styles.account2} onClick={onAccountContainer3Click}>
        <div className={styles.accountChild} />
        <div className={styles.accountWrapper}>
          <div className={styles.help}>Help</div>
        </div>
        <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
      </div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
    </div>
  );
};

export default SettingsScreen1;
