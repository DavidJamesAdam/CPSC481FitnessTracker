import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer1.module.css";

const FormContainer1 = () => {
  const navigate = useNavigate();

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <img
          className={styles.iosstatusBarblackIcon}
          alt=""
          src="/iosstatus-barblack.svg"
        />
      </div>
      <div className={styles.logLastSetButton}>
        <div className={styles.logLastSet}>Log Last Set</div>
      </div>
      <div className={styles.logLastSetButton1}>
        <div className={styles.logLastSet}>Log</div>
      </div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <div className={styles.progress}>
        <div className={styles.progressChild} />
        <div className={styles.progressBox}>
          <div className={styles.progressBoxChild} />
        </div>
        <div className={styles.progress1}>Progress</div>
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      </div>
      <div className={styles.socialArea}>
        <div className={styles.socialAreaChild} />
        <div className={styles.socialAreaItem} />
        <img className={styles.profilePicIcon} alt="" src="/profilepic.svg" />
        <div className={styles.latest}>
          <div className={styles.latest1}>Latest</div>
        </div>
        <div className={styles.socialAreaInner} />
        <div className={styles.hit225lbsOn}>hit 225lbs on bench press!</div>
        <div className={styles.minAgoWrapper}>
          <div className={styles.minAgo}>5min ago</div>
        </div>
        <div className={styles.user1234Wrapper}>
          <div className={styles.minAgo}>user1234</div>
        </div>
        <img className={styles.likeeIcon} alt="" src="/likee.svg" />
        <img className={styles.lineIcon} alt="" src="/line-2.svg" />
        <div className={styles.like}>1 like</div>
      </div>
      <div className={styles.bottombar}>
        <div className={styles.homeItemselected3}>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
        </div>
        <div className={styles.workoutItemselected3}>
          <div className={styles.homeIcon}>
            <img
              className={styles.vectorIcon}
              alt=""
              src="/vector1.svg"
              onClick={onVectorIconClick}
            />
          </div>
        </div>
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIcon1Click}
        />
        <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
        <img
          className={styles.vectorIcon3}
          alt=""
          src="/vector4.svg"
          onClick={onVectorIcon3Click}
        />
      </div>
    </div>
  );
};

export default FormContainer1;
