import { useMemo } from "react";
import styles from "./View.module.css";

const View = ({
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propRight,
  propBottom,
}) => {
  const viewStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      right: propRight,
      bottom: propBottom,
    };
  }, [propTop, propLeft, propWidth, propHeight, propRight, propBottom]);

  return (
    <div className={styles.view} style={viewStyle}>
      <div className={styles.view1}>View</div>
    </div>
  );
};

export default View;
