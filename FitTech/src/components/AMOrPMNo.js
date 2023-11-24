import { useMemo } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./AMOrPMNo.module.css";

const AMOrPMNo = ({
  group2,
  today,
  today1,
  showFrameDiv,
  aMOrPMNoWidth,
  aMOrPMNoPosition,
  aMOrPMNoTop,
  aMOrPMNoLeft,
  frameDivTop,
  frameDivLeft,
  todayFontFamily,
  todayFontFamily1,
  todayFontFamily2,
  todayFontFamily3,
  todayFontFamily4,
  todayFontFamily5,
  todayFontFamily6,
  todayFontFamily7,
  todayFontFamily8,
  todayFontFamily9,
  todayFontFamily10,
  todayFontFamily11,
  todayFontFamily12,
  todayFontFamily13,
  todayFontFamily14,
  todayFontFamily15,
  todayFontFamily16,
  todayFontFamily17,
  todayFontFamily18,
  todayFontFamily19,
  todayFontFamily20,
}) => {
  const aMOrPMNoStyle = useMemo(() => {
    return {
      width: aMOrPMNoWidth,
      position: aMOrPMNoPosition,
      top: aMOrPMNoTop,
      left: aMOrPMNoLeft,
    };
  }, [aMOrPMNoWidth, aMOrPMNoPosition, aMOrPMNoTop, aMOrPMNoLeft]);

  const frameDiv2Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const todayStyle = useMemo(() => {
    return {
      fontFamily: todayFontFamily,
    };
  }, [todayFontFamily]);

  const today1Style = useMemo(() => {
    return {
      fontFamily: todayFontFamily1,
    };
  }, [todayFontFamily1]);

  const today2Style = useMemo(() => {
    return {
      fontFamily: todayFontFamily2,
    };
  }, [todayFontFamily2]);

  const today3Style = useMemo(() => {
    return {
      fontFamily: todayFontFamily3,
    };
  }, [todayFontFamily3]);

  const today4Style = useMemo(() => {
    return {
      fontFamily: todayFontFamily4,
    };
  }, [todayFontFamily4]);

  const today5Style = useMemo(() => {
    return {
      fontFamily: todayFontFamily5,
    };
  }, [todayFontFamily5]);

  const today6Style = useMemo(() => {
    return {
      fontFamily: todayFontFamily6,
    };
  }, [todayFontFamily6]);

  const todayStyle1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily7,
    };
  }, [todayFontFamily7]);

  const today1Style1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily8,
    };
  }, [todayFontFamily8]);

  const today2Style1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily9,
    };
  }, [todayFontFamily9]);

  const today3Style1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily10,
    };
  }, [todayFontFamily10]);

  const today4Style1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily11,
    };
  }, [todayFontFamily11]);

  const today5Style1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily12,
    };
  }, [todayFontFamily12]);

  const today6Style1 = useMemo(() => {
    return {
      fontFamily: todayFontFamily13,
    };
  }, [todayFontFamily13]);

  const todayStyle2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily14,
    };
  }, [todayFontFamily14]);

  const today1Style2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily15,
    };
  }, [todayFontFamily15]);

  const today2Style2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily16,
    };
  }, [todayFontFamily16]);

  const today3Style2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily17,
    };
  }, [todayFontFamily17]);

  const today4Style2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily18,
    };
  }, [todayFontFamily18]);

  const today5Style2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily19,
    };
  }, [todayFontFamily19]);

  const today6Style2 = useMemo(() => {
    return {
      fontFamily: todayFontFamily20,
    };
  }, [todayFontFamily20]);

  return (
    <div className={styles.amOrPmno} style={aMOrPMNoStyle}>
      <img className={styles.amOrPmnoChild} alt="" src={group2} />
      <div className={styles.instanceParent} style={frameDiv2Style}>
        <FrameComponent
          today="6"
          today1="7"
          today2="8"
          today3="9"
          today4="10"
          today5="11"
          today6="12"
          frameDivAlignItems="center"
          todayLineHeight="unset"
          todayFontWeight="unset"
          todayFontFamily="'SF Pro Text'"
          todayColor="#d7d7d7"
          todayOpacity="unset"
          todayLineHeight1="unset"
          todayFontWeight1="unset"
          todayFontFamily1="'SF Pro Text'"
          todayColor1="#c2c2c2"
          todayOpacity1="unset"
          todayLineHeight2="unset"
          todayFontWeight2="unset"
          todayFontFamily2="'SF Pro Text'"
          todayColor2="#aeaeae"
          todayOpacity2="unset"
          todayFontSize="23px"
          todayLineHeight3="unset"
          todayFontWeight3="unset"
          todayFontFamily3="'SF Pro Text'"
          todayLineHeight4="unset"
          todayFontWeight4="unset"
          todayFontFamily4="'SF Pro Text'"
          todayColor3="#aeaeae"
          todayOpacity3="unset"
          todayLineHeight5="unset"
          todayFontWeight5="unset"
          todayFontFamily5="'SF Pro Text'"
          todayColor4="#c2c2c2"
          todayOpacity4="unset"
          todayLineHeight6="unset"
          todayFontWeight6="unset"
          todayFontFamily6="'SF Pro Text'"
          todayColor5="#d7d7d7"
          todayOpacity5="unset"
        />
        <FrameComponent
          today="38"
          today1="39"
          today2="40"
          today3="41"
          today4="42"
          today5="43"
          today6="44"
          frameDivAlignItems="center"
          todayLineHeight="unset"
          todayFontWeight="unset"
          todayFontFamily="'SF Pro Text'"
          todayColor="#d7d7d7"
          todayOpacity="unset"
          todayLineHeight1="unset"
          todayFontWeight1="unset"
          todayFontFamily1="'SF Pro Text'"
          todayColor1="#c2c2c2"
          todayOpacity1="unset"
          todayLineHeight2="unset"
          todayFontWeight2="unset"
          todayFontFamily2="'SF Pro Text'"
          todayColor2="#aeaeae"
          todayOpacity2="unset"
          todayFontSize="23px"
          todayLineHeight3="unset"
          todayFontWeight3="unset"
          todayFontFamily3="'SF Pro Text'"
          todayLineHeight4="unset"
          todayFontWeight4="unset"
          todayFontFamily4="'SF Pro Text'"
          todayColor3="#aeaeae"
          todayOpacity3="unset"
          todayLineHeight5="unset"
          todayFontWeight5="unset"
          todayFontFamily5="'SF Pro Text'"
          todayColor4="#c2c2c2"
          todayOpacity4="unset"
          todayLineHeight6="unset"
          todayFontWeight6="unset"
          todayFontFamily6="'SF Pro Text'"
          todayColor5="#d7d7d7"
          todayOpacity5="unset"
        />
        <FrameComponent
          today=" "
          today1=" "
          today2="AM"
          today3="PM"
          today4=" "
          today5=" "
          today6=" "
          frameDivAlignItems="flex-start"
          todayLineHeight="12px"
          todayFontWeight="unset"
          todayFontFamily="'SF Pro Text'"
          todayColor="#16191c"
          todayOpacity="unset"
          todayLineHeight1="18px"
          todayFontWeight1="unset"
          todayFontFamily1="'SF Pro Text'"
          todayColor1="#16191c"
          todayOpacity1="unset"
          todayLineHeight2="unset"
          todayFontWeight2="unset"
          todayFontFamily2="'SF Pro Text'"
          todayColor2="#aeaeae"
          todayOpacity2="unset"
          todayFontSize="23px"
          todayLineHeight3="unset"
          todayFontWeight3="unset"
          todayFontFamily3="'SF Pro Text'"
          todayLineHeight4="unset"
          todayFontWeight4="unset"
          todayFontFamily4="'SF Pro Text'"
          todayColor3="#aeaeae"
          todayOpacity3="unset"
          todayLineHeight5="18px"
          todayFontWeight5="unset"
          todayFontFamily5="'SF Pro Text'"
          todayColor4="#16191c"
          todayOpacity4="0.5"
          todayLineHeight6="12px"
          todayFontWeight6="unset"
          todayFontFamily6="'SF Pro Text'"
          todayColor5="#16191c"
          todayOpacity5="0.2"
        />
      </div>
    </div>
  );
};

export default AMOrPMNo;
