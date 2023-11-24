import styles from "./ContainerForm.module.css";

const ContainerForm = ({
  dimensionCode,
  onEditContainerClick,
  onViewContainerClick,
  onEditContainer1Click,
  onViewContainer1Click,
}) => {
  return (
    <div className={styles.letters}>
      <b className={styles.a}>A</b>
      <div className={styles.b}>
        <b className={styles.b1}>B</b>
        <div className={styles.barbellBench}>
          <div className={styles.barbellBenchChild} />
          <b className={styles.crunches}>Barbell Bench</b>
          <img
            className={styles.barbellBenchIcon}
            alt=""
            src="/barbell-bench@2x.png"
          />
          <div className={styles.edit} onClick={onEditContainerClick}>
            <div className={styles.edit1}>
              <p className={styles.edit2}>Edit</p>
            </div>
          </div>
          <div className={styles.view} onClick={onViewContainerClick}>
            <div className={styles.view1}>View</div>
          </div>
          <img
            className={styles.mdigarbageCanOutlineIcon}
            alt=""
            src="/mdigarbagecanoutline.svg"
          />
        </div>
      </div>
      <div className={styles.c}>
        <b className={styles.b1}>C</b>
        <div className={styles.barbellBench2}>
          <div className={styles.barbellBenchChild} />
          <b className={styles.crunches}>Crunches</b>
          <div className={styles.edit} onClick={onEditContainer1Click}>
            <div className={styles.edit1}>
              <p className={styles.edit2}>Edit</p>
            </div>
          </div>
          <div className={styles.view} onClick={onViewContainer1Click}>
            <div className={styles.view1}>View</div>
          </div>
          <img className={styles.barbellBenchIcon} alt="" src={dimensionCode} />
          <img
            className={styles.mdigarbageCanOutlineIcon}
            alt=""
            src="/mdigarbagecanoutline.svg"
          />
        </div>
      </div>
      <b className={styles.a}>D</b>
      <b className={styles.a}>E</b>
      <b className={styles.a}>F</b>
      <b className={styles.a}>G</b>
      <b className={styles.a}>H</b>
      <b className={styles.a}>I</b>
      <b className={styles.a}>J</b>
      <b className={styles.a}>K</b>
      <b className={styles.a}>L</b>
      <b className={styles.a}>M</b>
      <b className={styles.a}>N</b>
      <b className={styles.a}>O</b>
      <b className={styles.a}>P</b>
      <b className={styles.a}>Q</b>
      <b className={styles.a}>R</b>
      <b className={styles.a}>S</b>
      <b className={styles.a}>T</b>
      <b className={styles.a}>U</b>
      <b className={styles.a}>V</b>
      <b className={styles.a}>W</b>
      <b className={styles.a}>X</b>
      <b className={styles.a}>Y</b>
      <b className={styles.a}>Z</b>
    </div>
  );
};

export default ContainerForm;
