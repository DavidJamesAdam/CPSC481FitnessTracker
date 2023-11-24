import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScrollFrame from "../components/ScrollFrame";
import Bottombar from "../components/Bottombar";
import styles from "./Community3.module.css";

const Community3 = () => {
  const navigate = useNavigate();

  const onWorkoutexercisesIconClick = useCallback(() => {
    navigate("/workoutexercise");
  }, [navigate]);

  const onCommunityItemContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onBackCom3IconClick = useCallback(() => {
    navigate("/community-2");
  }, [navigate]);

  return (
    <div className={styles.community3}>
      <div className={styles.testworkout}>
        <img
          className={styles.iosstatusBarblackIcon}
          alt=""
          src="/iosstatus-barblack1.svg"
        />
        <b className={styles.community}>Community</b>
        <img
          className={styles.backCom3Icon}
          alt=""
          src="/back-com2.svg"
          onClick={onBackCom3IconClick}
        />
        <ScrollFrame />
        <Bottombar />
      </div>
    </div>
  );
};

export default Community3;
