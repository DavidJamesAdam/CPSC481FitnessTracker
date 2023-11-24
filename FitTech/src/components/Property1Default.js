import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({ aTop }) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      top: aTop,
    };
  }, [aTop]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <b className={styles.a}>A</b>
    </div>
  );
};

export default Property1Default;
