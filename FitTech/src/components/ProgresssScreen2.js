import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import ProgressForm from "./ProgressForm";
import { useNavigate } from "react-router-dom";
import InputDropdownActive from "./InputDropdownActive";
import styles from "./ProgresssScreen2.module.css";

const ProgresssScreen2 = () => {
  const navigate = useNavigate();

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
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
      <div className={styles.inputdropdownactive}>
        <div
          className={styles.pleaseSelectExercise}
        >{`Please Select Exercise `}</div>
        <div className={styles.dropdownBox}>
          <div className={styles.exercises}>Exercises</div>
          <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
        </div>
      </div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
      <InputDropdownActive
        pleaseSelectExercise="Data history"
        exercises="L6M"
        showPleaseSelectExercise
        inputDropdownActiveWidth="105px"
        inputDropdownActiveHeight="57px"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="186px"
        inputDropdownActiveLeft="38px"
      />
      <div className={styles.goalsWrapper} onClick={onFrameContainerClick}>
        <div className={styles.goals}>Goals</div>
      </div>
      <div className={styles.toGoal}>85% To Goal!</div>
      <div className={styles.to}>to</div>
      <InputDropdownActive
        pleaseSelectExercise="Select Date Range"
        showPleaseSelectExercise
        inputDropdownActiveWidth="44px"
        inputDropdownActiveHeight="57px"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="184px"
        inputDropdownActiveLeft="232px"
      />
      <InputDropdownActive
        showPleaseSelectExercise
        inputDropdownActiveWidth="44px"
        inputDropdownActiveHeight="unset"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="184px"
        inputDropdownActiveLeft="301px"
      />
    </div>
  );
};

export default ProgresssScreen2;
