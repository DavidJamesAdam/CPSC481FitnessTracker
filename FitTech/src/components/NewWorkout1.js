import { useState, useCallback } from "react";
import AreYouSureWindow from "./AreYouSureWindow";
import PortalPopup from "./PortalPopup";
import WorkoutUpdated from "./WorkoutUpdated";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import { useNavigate } from "react-router-dom";
import Vaadinbutton from "./Vaadinbutton";
import View from "./View";
import styles from "./NewWorkout1.module.css";

const NewWorkout1 = () => {
  const [isAreYouSureWindowOpen, setAreYouSureWindowOpen] = useState(false);
  const [isWorkoutUpdatedOpen, setWorkoutUpdatedOpen] = useState(false);
  const navigate = useNavigate();

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onIconParkOutlineaddClick = useCallback(() => {
    navigate("/choose-exercise-category-view");
  }, [navigate]);

  const openAreYouSureWindow = useCallback(() => {
    setAreYouSureWindowOpen(true);
  }, []);

  const closeAreYouSureWindow = useCallback(() => {
    setAreYouSureWindowOpen(false);
  }, []);

  const openWorkoutUpdated = useCallback(() => {
    setWorkoutUpdatedOpen(true);
  }, []);

  const closeWorkoutUpdated = useCallback(() => {
    setWorkoutUpdatedOpen(false);
  }, []);

  const onUileditIconClick = useCallback(() => {
    navigate("/workout-edit");
  }, [navigate]);

  return (
    <>
      <div className={styles.newWorkout}>
        <div className={styles.iosstatusBarblack}>
          <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
          <IOSStatusBarBlack
            iOSStatusBarBlackIconPosition="absolute"
            iOSStatusBarBlackIconTop="24.4px"
            iOSStatusBarBlackIconLeft="1px"
          />
        </div>
        <img
          className={styles.backCom2Icon}
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
        <div className={styles.chestDay}>Chest Day</div>
        <Vaadinbutton />
        <img
          className={styles.iconParkOutlineadd}
          alt=""
          src="/iconparkoutlineadd1.svg"
          onClick={onIconParkOutlineaddClick}
        />
        <div className={styles.barbellBench}>
          <div className={styles.barbellBenchChild} />
          <b className={styles.barbellBench1}>Barbell Bench</b>
          <img
            className={styles.barbellBenchIcon}
            alt=""
            src="/barbell-bench1@2x.png"
          />
          <View
            propTop="67px"
            propLeft="197px"
            propWidth="81px"
            propHeight="27px"
            propRight="unset"
            propBottom="unset"
          />
          <img
            className={styles.mdigarbageCanOutlineIcon}
            alt=""
            src="/mdigarbagecanoutline.svg"
            onClick={openAreYouSureWindow}
          />
        </div>
        <div className={styles.newWorkoutChild} />
        <div className={styles.finish} onClick={openWorkoutUpdated}>
          Finish
        </div>
        <img
          className={styles.uileditIcon}
          alt=""
          src="/uiledit.svg"
          onClick={onUileditIconClick}
        />
      </div>
      {isAreYouSureWindowOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAreYouSureWindow}
        >
          <AreYouSureWindow onClose={closeAreYouSureWindow} />
        </PortalPopup>
      )}
      {isWorkoutUpdatedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWorkoutUpdated}
        >
          <WorkoutUpdated onClose={closeWorkoutUpdated} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewWorkout1;
