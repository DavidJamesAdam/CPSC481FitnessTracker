import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  today,
  today1,
  today2,
  today3,
  today4,
  today5,
  today6,
  frameDivAlignItems,
  todayLineHeight,
  todayFontWeight,
  todayFontFamily,
  todayColor,
  todayOpacity,
  todayLineHeight1,
  todayFontWeight1,
  todayFontFamily1,
  todayColor1,
  todayOpacity1,
  todayLineHeight2,
  todayFontWeight2,
  todayFontFamily2,
  todayColor2,
  todayOpacity2,
  todayFontSize,
  todayLineHeight3,
  todayFontWeight3,
  todayFontFamily3,
  todayLineHeight4,
  todayFontWeight4,
  todayFontFamily4,
  todayColor3,
  todayOpacity3,
  todayLineHeight5,
  todayFontWeight5,
  todayFontFamily5,
  todayColor4,
  todayOpacity4,
  todayLineHeight6,
  todayFontWeight6,
  todayFontFamily6,
  todayColor5,
  todayOpacity5,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  const todayStyle = useMemo(() => {
    return {
      lineHeight: todayLineHeight,
      fontWeight: todayFontWeight,
      fontFamily: todayFontFamily,
      color: todayColor,
      opacity: todayOpacity,
    };
  }, [
    todayLineHeight,
    todayFontWeight,
    todayFontFamily,
    todayColor,
    todayOpacity,
  ]);

  const today1Style = useMemo(() => {
    return {
      lineHeight: todayLineHeight1,
      fontWeight: todayFontWeight1,
      fontFamily: todayFontFamily1,
      color: todayColor1,
      opacity: todayOpacity1,
    };
  }, [
    todayLineHeight1,
    todayFontWeight1,
    todayFontFamily1,
    todayColor1,
    todayOpacity1,
  ]);

  const today2Style = useMemo(() => {
    return {
      lineHeight: todayLineHeight2,
      fontWeight: todayFontWeight2,
      fontFamily: todayFontFamily2,
      color: todayColor2,
      opacity: todayOpacity2,
    };
  }, [
    todayLineHeight2,
    todayFontWeight2,
    todayFontFamily2,
    todayColor2,
    todayOpacity2,
  ]);

  const today3Style = useMemo(() => {
    return {
      fontSize: todayFontSize,
      lineHeight: todayLineHeight3,
      fontWeight: todayFontWeight3,
      fontFamily: todayFontFamily3,
    };
  }, [todayFontSize, todayLineHeight3, todayFontWeight3, todayFontFamily3]);

  const today4Style = useMemo(() => {
    return {
      lineHeight: todayLineHeight4,
      fontWeight: todayFontWeight4,
      fontFamily: todayFontFamily4,
      color: todayColor3,
      opacity: todayOpacity3,
    };
  }, [
    todayLineHeight4,
    todayFontWeight4,
    todayFontFamily4,
    todayColor3,
    todayOpacity3,
  ]);

  const today5Style = useMemo(() => {
    return {
      lineHeight: todayLineHeight5,
      fontWeight: todayFontWeight5,
      fontFamily: todayFontFamily5,
      color: todayColor4,
      opacity: todayOpacity4,
    };
  }, [
    todayLineHeight5,
    todayFontWeight5,
    todayFontFamily5,
    todayColor4,
    todayOpacity4,
  ]);

  const today6Style = useMemo(() => {
    return {
      lineHeight: todayLineHeight6,
      fontWeight: todayFontWeight6,
      fontFamily: todayFontFamily6,
      color: todayColor5,
      opacity: todayOpacity5,
    };
  }, [
    todayLineHeight6,
    todayFontWeight6,
    todayFontFamily6,
    todayColor5,
    todayOpacity5,
  ]);

  return (
    <div className={styles.todayParent} style={frameDiv1Style}>
      <div className={styles.today} style={todayStyle}>
        {today}
      </div>
      <div className={styles.today1} style={today1Style}>
        {today1}
      </div>
      <div className={styles.today2} style={today2Style}>
        {today2}
      </div>
      <div className={styles.today3} style={today3Style}>
        {today3}
      </div>
      <div className={styles.today2} style={today4Style}>
        {today4}
      </div>
      <div className={styles.today1} style={today5Style}>
        {today5}
      </div>
      <div className={styles.today} style={today6Style}>
        {today6}
      </div>
    </div>
  );
};

export default FrameComponent;
