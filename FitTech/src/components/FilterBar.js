import styles from "./FilterBar.module.css";

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterBarChild} />
      <div className={styles.textbox}>
        <div className={styles.filter}>Filter</div>
      </div>
      <img className={styles.uilenterIcon} alt="" src="/uilenter.svg" />
      <img className={styles.mdifilterIcon} alt="" src="/mdifilter.svg" />
    </div>
  );
};

export default FilterBar;
