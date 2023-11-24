import { useMemo } from "react";
import styles from "./LineMdconfirmCircleTwotone.module.css";

const LineMdconfirmCircleTwotone = ({
  lineMdconfirmCircleTwotonPosition,
  lineMdconfirmCircleTwotonTop,
  lineMdconfirmCircleTwotonLeft,
  lineMdconfirmCircleTwotonCursor,
  onLineMdconfirmCircleTwotoneClick,
}) => {
  const lineMdconfirmCircleTwotoneIconStyle = useMemo(() => {
    return {
      position: lineMdconfirmCircleTwotonPosition,
      top: lineMdconfirmCircleTwotonTop,
      left: lineMdconfirmCircleTwotonLeft,
      cursor: lineMdconfirmCircleTwotonCursor,
    };
  }, [
    lineMdconfirmCircleTwotonPosition,
    lineMdconfirmCircleTwotonTop,
    lineMdconfirmCircleTwotonLeft,
    lineMdconfirmCircleTwotonCursor,
  ]);

  return (
    <img
      className={styles.lineMdconfirmCircleTwotoneIcon}
      alt=""
      src="/linemdconfirmcircletwotone.svg"
      onClick={onLineMdconfirmCircleTwotoneClick}
      style={lineMdconfirmCircleTwotoneIconStyle}
    />
  );
};

export default LineMdconfirmCircleTwotone;
