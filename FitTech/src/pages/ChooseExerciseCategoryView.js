import { useCallback } from "react";
import NewWorkout2 from "../components/NewWorkout2";
import { useNavigate } from "react-router-dom";
import styles from "./ChooseExerciseCategoryView.module.css";

const ChooseExerciseCategoryView = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/progress");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/community-2");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/settiings");
  }, [navigate]);

  const onImage9Click = useCallback(() => {
    navigate("/exercise-selection");
  }, [navigate]);

  const onBackCom2IconClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <div className={styles.chooseExerciseCategoryView}>
      <NewWorkout2 />
      <div className={styles.bottombar}>
        <img
          className={styles.homeIcon}
          alt=""
          src="/home2.svg"
          onClick={onHomeIconClick}
        />
        <div className={styles.workoutItem}>
          <img
            className={styles.workoutexercisesIcon}
            alt=""
            src="/workoutexercises2.svg"
          />
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector3.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="/vector4.svg"
          onClick={onVectorIcon2Click}
        />
      </div>
      <img
        className={styles.image9Icon}
        alt=""
        src="/image-9@2x.png"
        onClick={onImage9Click}
      />
      <div className={styles.chest}>Chest</div>
      <img
        className={styles.backCom2Icon}
        alt=""
        src="/back-com2.svg"
        onClick={onBackCom2IconClick}
      />
    </div>
  );
};

export default ChooseExerciseCategoryView;
