import { useCallback } from "react";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import ProgressForm from "./ProgressForm";
import InputDropdownActive from "./InputDropdownActive";
import { useNavigate } from "react-router-dom";
import TypeTextStateInactive from "./TypeTextStateInactive";
import styles from "./ProgresssScreen.module.css";

const ProgresssScreen = () => {
  const navigate = useNavigate();

  const onBackCom2Icon2Click = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
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
      <InputDropdownActive
        pleaseSelectExercise="Please Select Exercise "
        exercises="Exercises"
        showPleaseSelectExercise
        inputDropdownActiveWidth="245px"
        inputDropdownActiveHeight="54px"
        inputDropdownActivePosition="absolute"
        inputDropdownActiveTop="143px"
        inputDropdownActiveLeft="74px"
      />
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2Icon2Click}
      />
      <div className={styles.setWrapper} onClick={onFrameContainer8Click}>
        <div className={styles.set}>Set</div>
      </div>
      <TypeTextStateInactive
        label="Weight"
        textFieldData="Text field data"
        typeTextStateInactivePosition="absolute"
        typeTextStateInactiveTop="218px"
        typeTextStateInactiveLeft="94px"
        typeTextStateInactiveHeight="unset"
      />
      <TypeTextStateInactive
        label="Reps"
        textFieldData="Text field data"
        typeTextStateInactivePosition="absolute"
        typeTextStateInactiveTop="284px"
        typeTextStateInactiveLeft="96px"
        typeTextStateInactiveHeight="unset"
      />
      <TypeTextStateInactive
        label="additional notes"
        typeTextStateInactivePosition="absolute"
        typeTextStateInactiveTop="393px"
        typeTextStateInactiveLeft="96px"
        typeTextStateInactiveHeight="239px"
      />
    </div>
  );
};

export default ProgresssScreen;
