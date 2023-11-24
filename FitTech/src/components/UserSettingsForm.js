import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import InputTextActive from "./InputTextActive";
import NewPasswordFormContainer from "./NewPasswordFormContainer";
import styles from "./UserSettingsForm.module.css";

const UserSettingsForm = () => {
  const navigate = useNavigate();

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

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
      <div className={styles.settingsScreenChild} />
      <b className={styles.user1234}>user1234</b>
      <img className={styles.profilePicIcon} alt="" src="/profilepic1.svg" />
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <InputTextActive
        enterWorkoutNameHere="user1234"
        inputTextActiveWidth="200px"
        inputTextActivePosition="absolute"
        inputTextActiveTop="238px"
        inputTextActiveLeft="40px"
        inputTextActiveHeight="unset"
        textboxFlex="unset"
      />
      <div className={styles.usernameWrapper}>
        <b className={styles.username}>Username</b>
      </div>
      <NewPasswordFormContainer passwordInputConfirmPassw="New password" />
      <NewPasswordFormContainer
        passwordInputConfirmPassw="Confirm New password"
        propTop="358px"
      />
      <div
        className={styles.saveChangesWrapper}
        onClick={onFrameContainer1Click}
      >
        <div className={styles.username}> Save Changes</div>
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
      <div className={styles.account}>Account</div>
    </div>
  );
};

export default UserSettingsForm;
