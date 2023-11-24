import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IOSStatusBarBlack from "../components/IOSStatusBarBlack";
import HomeItemSelected3 from "../components/HomeItemSelected3";
import WorkoutItemSelected3 from "../components/WorkoutItemSelected3";
import AMOrPMNo from "../components/AMOrPMNo";
import styles from "./EnteringWeight.module.css";

const EnteringWeight = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <div className={styles.enteringWeight}>
      <div className={styles.homeScreen}>
        <div className={styles.iosstatusBarblack}>
          <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
          <IOSStatusBarBlack
            iOSStatusBarBlackIconPosition="absolute"
            iOSStatusBarBlackIconTop="24.4px"
            iOSStatusBarBlackIconLeft="1px"
          />
        </div>
        <div className={styles.logLastSetButton}>
          <div className={styles.bicepsBicepCurls}>Biceps: Bicep Curls</div>
        </div>
        <div className={styles.bottombar}>
          <HomeItemSelected3 />
          <WorkoutItemSelected3 onVectorIconClick={onVectorIconClick} />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector2.svg"
            onClick={onVectorIcon1Click}
          />
          <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
          <img
            className={styles.vectorIcon2}
            alt=""
            src="/vector4.svg"
            onClick={onVectorIcon3Click}
          />
        </div>
        <div className={styles.set1}>{`Set 1: `}</div>
        <div className={styles.swipeUpOr}>
          Swipe up or down to select weight used for this set.
        </div>
        <img
          className={styles.backCom2Icon}
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
        <AMOrPMNo
          group2="/group-21.svg"
          today="kg"
          today1="lbs"
          showFrameDiv={false}
          aMOrPMNoWidth="101px"
          aMOrPMNoPosition="absolute"
          aMOrPMNoTop="294px"
          aMOrPMNoLeft="145px"
          frameDivTop="calc(50% - 83.5px)"
          frameDivLeft="calc(50% - 38.5px)"
          todayFontFamily="Inter"
          todayFontFamily1="Inter"
          todayFontFamily2="Inter"
          todayFontFamily3="Inter"
          todayFontFamily4="Inter"
          todayFontFamily5="Inter"
          todayFontFamily6="Inter"
          todayFontFamily7="Inter"
          todayFontFamily8="Inter"
          todayFontFamily9="Inter"
          todayFontFamily10="Inter"
          todayFontFamily11="Inter"
          todayFontFamily12="Inter"
          todayFontFamily13="Inter"
          todayFontFamily14="Inter"
          todayFontFamily15="Inter"
          todayFontFamily16="Inter"
          todayFontFamily17="Inter"
          todayFontFamily18="Inter"
          todayFontFamily19="Inter"
          todayFontFamily20="Inter"
        />
        <div className={styles.button}>
          <b className={styles.confirmEntry}>Confirm Entry</b>
        </div>
        <div className={styles.pressTheButton}>
          Press the button below to confirm your entered weight for this set.
        </div>
      </div>
    </div>
  );
};

export default EnteringWeight;
