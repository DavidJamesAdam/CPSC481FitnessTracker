import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import FormContainer from "./FormContainer";
import InputTextActive from "./InputTextActive";
import styles from "./UserSettingsForm1.module.css";

const UserSettingsForm1 = () => {
  const navigate = useNavigate();

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onSendButtonContainerClick = useCallback(() => {
    navigate("/exercise");
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
      <FormContainer userInfo="Full name" userFullName="Name" />
      <FormContainer
        userInfo="Email"
        userFullName="example@email.com"
        propTop="290px"
      />
      <div className={styles.emailInput}>
        <div className={styles.messageInput}>
          <div className={styles.messageWrapper}>
            <div className={styles.message}>Message</div>
          </div>
          <InputTextActive
            inputTextActiveWidth="200px"
            inputTextActivePosition="absolute"
            inputTextActiveTop="42px"
            inputTextActiveLeft="0px"
            inputTextActiveHeight="unset"
            textboxFlex="unset"
          />
        </div>
      </div>
      <div className={styles.sendButton} onClick={onSendButtonContainerClick}>
        <div className={styles.message}>Send</div>
      </div>
      <div className={styles.help}>Help</div>
    </div>
  );
};

export default UserSettingsForm1;
