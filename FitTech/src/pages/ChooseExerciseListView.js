import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Exercises4 from "../components/Exercises4";
import styles from "./ChooseExerciseListView.module.css";

const ChooseExerciseListView = () => {
  const navigate = useNavigate();

  const onWorkoutItemNoContainerClick = useCallback(() => {
    navigate("/workoutexercises-screen");
  }, [navigate]);

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

  return (
    <div className={styles.chooseExerciseListView}>
      <Exercises4 />
      <div className={styles.letters}>
        <div className={styles.letters1}>
          <b className={styles.a}>A</b>
          <div className={styles.b}>
            <b className={styles.b1}>B</b>
          </div>
          <div className={styles.c}>
            <b className={styles.b1}>C</b>
          </div>
          <b className={styles.d}>D</b>
          <b className={styles.e}>E</b>
          <b className={styles.e}>F</b>
          <b className={styles.e}>G</b>
          <b className={styles.e}>H</b>
          <b className={styles.e}>I</b>
          <b className={styles.e}>J</b>
          <b className={styles.e}>K</b>
          <b className={styles.e}>L</b>
          <b className={styles.e}>M</b>
          <b className={styles.e}>N</b>
          <b className={styles.e}>O</b>
          <b className={styles.e}>P</b>
          <b className={styles.e}>Q</b>
          <b className={styles.e}>R</b>
          <b className={styles.e}>S</b>
          <b className={styles.e}>T</b>
          <b className={styles.e}>U</b>
          <b className={styles.e}>V</b>
          <b className={styles.e}>W</b>
          <b className={styles.e}>X</b>
          <b className={styles.e}>Y</b>
          <b className={styles.e}>Z</b>
        </div>
      </div>
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
    </div>
  );
};

export default ChooseExerciseListView;
