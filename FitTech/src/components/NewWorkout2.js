import { useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import PortalPopup from "./PortalPopup";
import FilterBar from "./FilterBar";
import IOSStatusBarBlack from "./IOSStatusBarBlack";
import Vaadinbutton from "./Vaadinbutton";
import { useNavigate } from "react-router-dom";
import MaterialSymbolslineEndArroIcon from "./MaterialSymbolslineEndArroIcon";
import StreamlinehealthMedicalHearIco from "./StreamlinehealthMedicalHearIco";
import styles from "./NewWorkout2.module.css";

const NewWorkout2 = () => {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isFilterBarOpen, setFilterBarOpen] = useState(false);
  const navigate = useNavigate();

  const onExercisesTextClick = useCallback(() => {
    navigate("/choose-exercise-list-view");
  }, [navigate]);

  const openSearchBar = useCallback(() => {
    setSearchBarOpen(true);
  }, []);

  const closeSearchBar = useCallback(() => {
    setSearchBarOpen(false);
  }, []);

  const openFilterBar = useCallback(() => {
    setFilterBarOpen(true);
  }, []);

  const closeFilterBar = useCallback(() => {
    setFilterBarOpen(false);
  }, []);

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
        <div className={styles.chestDay}>Chest Day</div>
        <div className={styles.yourListAppears}>
          Your list appears to be empty
        </div>
        <Vaadinbutton />
        <div className={styles.newWorkoutChild} />
        <div className={styles.newWorkoutItem} />
        <div className={styles.categories}>Categories</div>
        <div className={styles.exercises} onClick={onExercisesTextClick}>
          Exercises
        </div>
        <div className={styles.newWorkoutInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.newWorkoutChild1} />
        <div className={styles.newWorkoutChild2} />
        <div className={styles.cardio}>Cardio</div>
        <div className={styles.newWorkoutChild3} />
        <div className={styles.newWorkoutChild4} />
        <div className={styles.newWorkoutChild5} />
        <div className={styles.newWorkoutChild6} />
        <div className={styles.newWorkoutChild7} />
        <div className={styles.newWorkoutChild8} />
        <div className={styles.newWorkoutChild9} />
        <div className={styles.newWorkoutChild10} />
        <MaterialSymbolslineEndArroIcon dimensions="/materialsymbolslineendarrow.svg" />
        <MaterialSymbolslineEndArroIcon
          dimensions="/materialsymbolslineendarrow1.svg"
          propLeft="54px"
        />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.back}>Back</div>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <div className={styles.abs}>Abs</div>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <div className={styles.biceps}>Biceps</div>
        <img
          className={styles.ictwotoneSearchIcon}
          alt=""
          src="/ictwotonesearch.svg"
          onClick={openSearchBar}
        />
        <StreamlinehealthMedicalHearIco />
        <div className={styles.newWorkoutChild11} />
        <div className={styles.div}>1 2 . . . . . 4 5</div>
        <img className={styles.lineIcon} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild12} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild13} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild14} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild15} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild16} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild17} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild18} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild19} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild20} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild21} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild22} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild23} alt="" src="/line-17.svg" />
        <img className={styles.newWorkoutChild24} alt="" src="/line-17.svg" />
        <img
          className={styles.mdifilterIcon}
          alt=""
          src="/mdifilter1.svg"
          onClick={openFilterBar}
        />
      </div>
      {isSearchBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearchBar}
        >
          <SearchBar onClose={closeSearchBar} />
        </PortalPopup>
      )}
      {isFilterBarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterBar}
        >
          <FilterBar onClose={closeFilterBar} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewWorkout2;
