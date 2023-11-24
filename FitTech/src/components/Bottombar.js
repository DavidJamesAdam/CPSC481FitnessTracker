import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutItemNo from "./WorkoutItemNo";
import SelectedYes from "./SelectedYes";
import styles from "./Bottombar.module.css";

const Bottombar = () => {
  const navigate = useNavigate();

  const onWorkoutexercisesIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onHomeCom3IconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onProgressCom3IconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onSettingsCom3IconClick = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  return (
    <div className={styles.bottombar}>
      <div className={styles.home}>
        <img
          className={styles.homeCom3Icon}
          alt=""
          src="/home-com3.svg"
          onClick={onHomeCom3IconClick}
        />
      </div>
      <WorkoutItemNo
        workoutexercises="/vector1.svg"
        showWorkout={false}
        workoutItemNoWidth="56px"
        workoutItemNoPadding="var(--padding-mini) 0px"
        workoutItemNoBoxSizing="border-box"
        workoutItemNoFlex="unset"
        workoutItemNoBackgroundColor="unset"
        workoutItemNoCursor="unset"
        workoutexercisesIconCursor="pointer"
        workoutColor="2px solid #000"
        onWorkoutexercisesIconClick={onWorkoutexercisesIconClick}
      />
      <img
        className={styles.progressCom3Icon}
        alt=""
        src="/vector8.svg"
        onClick={onProgressCom3IconClick}
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
        className={styles.settingsCom3Icon}
        alt=""
        src="/vector4.svg"
        onClick={onSettingsCom3IconClick}
      />
    </div>
  );
};

export default Bottombar;
