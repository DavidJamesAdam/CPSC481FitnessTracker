import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import ProgressForm from "./ProgressForm";
import { useNavigate } from "react-router-dom";
import styles from "./ProgresssScreen1.module.css";

const ProgresssScreen1 = () => {
  const navigate = useNavigate();

  const onBackCom2Icon1Click = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/exercise");
  }, [navigate]);

  return (
    <div className={styles.progresssScreen}>
      <div className={styles.iosstatusBarblack}>
        <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
        <IOSStatusBarBlack
          iOSStatusBarBlackIconPosition="absolute"
          iOSStatusBarBlackIconTop="24.4px"
          iOSStatusBarBlackIconLeft="1px"
        />
      </div>
      <ProgressForm />
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2Icon1Click}
      />
      <div className={styles.progresssScreenChild} onClick={onFrameClick} />
      <div
        className={styles.bicepCurl408Wrapper}
        onClick={onFrameContainer1Click}
      >
        <div className={styles.bicepCurl408}>Bicep Curl: 40*8</div>
      </div>
      <div
        className={styles.setNewGoalWrapper}
        onClick={onFrameContainer2Click}
      >
        <div className={styles.setNewGoal}>Set New Goal</div>
      </div>
      <div
        className={styles.weightedDips456Wrapper}
        onClick={onFrameContainer3Click}
      >
        <div className={styles.bicepCurl408}>Weighted Dips: 45*6</div>
      </div>
      <div className={styles.progresssScreenItem} onClick={onFrame1Click} />
      <div className={styles.div}>93%</div>
      <div className={styles.benchPress2252}>Bench Press: 225*2</div>
      <div className={styles.div1}>88%</div>
      <div className={styles.div2}>80%</div>
      <div className={styles.backSquat2755}>Back Squat: 275*5</div>
      <div className={styles.div3}>88%</div>
      <div className={styles.editWrapper} onClick={onFrameContainer4Click}>
        <div className={styles.setNewGoal}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Edit</p>
        </div>
      </div>
      <div className={styles.editContainer} onClick={onFrameContainer5Click}>
        <div className={styles.setNewGoal}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Edit</p>
        </div>
      </div>
      <div className={styles.editFrame} onClick={onFrameContainer6Click}>
        <div className={styles.setNewGoal}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Edit</p>
        </div>
      </div>
      <div className={styles.frameDiv} onClick={onFrameContainer7Click}>
        <div className={styles.setNewGoal}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Edit</p>
        </div>
      </div>
    </div>
  );
};

export default ProgresssScreen1;
