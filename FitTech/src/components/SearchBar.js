import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarChild} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.textbox}>
        <div className={styles.search}>Search</div>
      </div>
      <img
        className={styles.fluentarrowEnterLeft20FilIcon}
        alt=""
        src="/fluentarrowenterleft20filled.svg"
      />
    </div>
  );
};

export default SearchBar;
