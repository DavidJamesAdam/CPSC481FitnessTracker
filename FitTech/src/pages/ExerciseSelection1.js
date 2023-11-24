import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Exercises2 from "../components/Exercises2";
import styles from "./ExerciseSelection1.module.css";

const ExerciseSelection1 = () => {
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
    <div className={styles.exerciseSelection}>
      <Exercises2 />
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
          <b className={styles.a}>E</b>
          <b className={styles.a}>F</b>
          <b className={styles.g}>G</b>
          <b className={styles.h}>H</b>
          <b className={styles.h}>I</b>
          <b className={styles.h}>J</b>
          <b className={styles.h}>K</b>
          <b className={styles.h}>L</b>
          <b className={styles.h}>M</b>
          <b className={styles.h}>N</b>
          <b className={styles.h}>O</b>
          <b className={styles.h}>P</b>
          <b className={styles.h}>Q</b>
          <b className={styles.h}>R</b>
          <b className={styles.h}>S</b>
          <b className={styles.h}>T</b>
          <b className={styles.h}>U</b>
          <b className={styles.h}>V</b>
          <b className={styles.h}>W</b>
          <b className={styles.h}>X</b>
          <b className={styles.h}>Y</b>
          <b className={styles.h}>Z</b>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSelection1;
