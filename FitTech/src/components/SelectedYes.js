import { useMemo } from "react";
import styles from "./SelectedYes.module.css";

const SelectedYes = ({
  community,
  showCommunity,
  selectedYesWidth,
  selectedYesHeight,
  selectedYesCursor,
  onCommunityItemContainerClick,
}) => {
  const selectedYesStyle = useMemo(() => {
    return {
      width: selectedYesWidth,
      height: selectedYesHeight,
      cursor: selectedYesCursor,
    };
  }, [selectedYesWidth, selectedYesHeight, selectedYesCursor]);

  return (
    <div
      className={styles.selectedyes}
      style={selectedYesStyle}
      onClick={onCommunityItemContainerClick}
    >
      <img className={styles.communityIcon} alt="" src={community} />
      {showCommunity && <div className={styles.community}>Community</div>}
    </div>
  );
};

export default SelectedYes;
