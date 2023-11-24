import { useMemo } from "react";
import styles from "./MaterialSymbolslineEndArroIcon.module.css";

const MaterialSymbolslineEndArroIcon = ({ dimensions, propLeft }) => {
  const materialSymbolslineEndArroIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <img
      className={styles.materialSymbolslineEndArroIcon}
      alt=""
      src={dimensions}
      style={materialSymbolslineEndArroIconStyle}
    />
  );
};

export default MaterialSymbolslineEndArroIcon;
