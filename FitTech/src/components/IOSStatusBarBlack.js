import { useMemo } from "react";
import styles from "./IOSStatusBarBlack.module.css";

const IOSStatusBarBlack = ({
  iOSStatusBarBlackIconPosition,
  iOSStatusBarBlackIconTop,
  iOSStatusBarBlackIconLeft,
}) => {
  const iOSStatusBarBlackIconStyle = useMemo(() => {
    return {
      position: iOSStatusBarBlackIconPosition,
      top: iOSStatusBarBlackIconTop,
      left: iOSStatusBarBlackIconLeft,
    };
  }, [
    iOSStatusBarBlackIconPosition,
    iOSStatusBarBlackIconTop,
    iOSStatusBarBlackIconLeft,
  ]);

  return (
    <img
      className={styles.iosstatusBarblackIcon}
      alt=""
      src="/iosstatus-barblack.svg"
      style={iOSStatusBarBlackIconStyle}
    />
  );
};

export default IOSStatusBarBlack;
