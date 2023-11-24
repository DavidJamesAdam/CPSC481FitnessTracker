import { useMemo } from "react";
import WorkoutItemNo1 from "./WorkoutItemNo1";
import SelectedYes from "./SelectedYes";
import styles from "./Bottombar1.module.css";

const Bottombar1 = ({
  bottombarCursor,
  onHomeCom2IconClick,
  onWorkoutCom2IconClick,
  onProgressCom2IconClick,
  onCommunityItemContainerClick,
  onSettingsCom2IconClick,
}) => {
  const selectedYesStyle = useMemo(() => {
    return {
      cursor: bottombarCursor,
    };
  }, [bottombarCursor]);

  return (
    <div className={styles.bottombar}>
      <div className={styles.home}>
        <img
          className={styles.homeCom2Icon}
          alt=""
          src="/home-com3.svg"
          onClick={onHomeCom2IconClick}
        />
      </div>
      <WorkoutItemNo1 />
      <img
        className={styles.progressCom2Icon}
        alt=""
        src="/vector8.svg"
        onClick={onProgressCom2IconClick}
      />
      <SelectedYes
        community="/community2.svg"
        showCommunity={false}
        selectedYesWidth="51px"
        selectedYesHeight="43px"
        selectedYesCursor="pointer"
        onCommunityItemContainerClick={onCommunityItemContainerClick}
      />
      <img
        className={styles.settingsCom2Icon}
        alt=""
        src="/vector4.svg"
        onClick={onSettingsCom2IconClick}
      />
    </div>
  );
};

export default Bottombar1;
