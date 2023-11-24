import { useState, useCallback } from "react";
import FilterBar from "./FilterBar";
import PortalPopup from "./PortalPopup";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import WorkoutItemNo from "./WorkoutItemNo";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import View from "./View";
import styles from "./Exercises2.module.css";

const Exercises2 = () => {
  const [isFilterBarOpen, setFilterBarOpen] = useState(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

  const onProgressItemContainerClick = useCallback(() => {
    navigate("/progresss-screen");
  }, [navigate]);

  const openFilterBar = useCallback(() => {
    setFilterBarOpen(true);
  }, []);

  const closeFilterBar = useCallback(() => {
    setFilterBarOpen(false);
  }, []);

  const openSearchBar = useCallback(() => {
    setSearchBarOpen(true);
  }, []);

  const closeSearchBar = useCallback(() => {
    setSearchBarOpen(false);
  }, []);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <>
      <div className={styles.exercises}>
        <div className={styles.exercisesChild} />
        <div className={styles.navigationBar}>
          <div className={styles.homeItem}>
            <img className={styles.homeIcon} alt="" src="/home1.svg" />
            <div className={styles.home}>Home</div>
          </div>
          <WorkoutItemNo
            workoutexercises="/workoutexercises1.svg"
            showWorkout
            workoutItemNoWidth="unset"
            workoutItemNoPadding="unset"
            workoutItemNoBoxSizing="unset"
            workoutItemNoFlex="1"
            workoutItemNoBackgroundColor="2px solid #000"
            workoutItemNoCursor="pointer"
            workoutexercisesIconCursor="unset"
            workoutColor="#fff"
            onWorkoutItemNoContainerClick={onWorkoutItemNoContainerClick}
          />
          <div
            className={styles.progressItem}
            onClick={onProgressItemContainerClick}
          >
            <img className={styles.homeIcon} alt="" src="/progress.svg" />
            <div className={styles.progress}>Progress</div>
          </div>
          <div className={styles.communityItem}>
            <img className={styles.homeIcon} alt="" src="/community1.svg" />
            <div className={styles.home}>Community</div>
          </div>
          <div className={styles.communityItem}>
            <img className={styles.settingsIcon} alt="" src="/settings.svg" />
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
        <div className={styles.iosstatusBarblack}>
          <div className={styles.iosstatusBarblack1}>iOS/Status Bar/Black</div>
          <IOSStatusBarBlack
            iOSStatusBarBlackIconPosition="absolute"
            iOSStatusBarBlackIconTop="24.4px"
            iOSStatusBarBlackIconLeft="1px"
          />
        </div>
        <div className={styles.exercisesItem} />
        <div className={styles.scrollBar}>
          <div className={styles.scrollBarChild} />
          <div className={styles.scrollBarItem} />
        </div>
        <div className={styles.chestDay}>Chest Day</div>
        <div className={styles.yourListAppears}>
          Your list appears to be empty
        </div>
        <img className={styles.exercisesInner} alt="" src="/rectangle-24.svg" />
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
            className={styles.iconParkOutlineadd}
            alt=""
            src="/iconparkoutlineadd.svg"
          />
        </div>
        <img
          className={styles.mdifilterIcon}
          alt=""
          src="/mdifilter1.svg"
          onClick={openFilterBar}
        />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={openSearchBar}
        />
        <img
          className={styles.backCom2Icon}
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom2IconClick}
        />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-27.svg" />
        <div className={styles.chest}>Chest</div>
      </div>
      {isFilterBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterBar}
        >
          <FilterBar onClose={closeFilterBar} />
        </PortalPopup>
      )}
      {isSearchBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearchBar}
        >
          <SearchBar onClose={closeSearchBar} />
        </PortalPopup>
      )}
    </>
  );
};

export default Exercises2;
