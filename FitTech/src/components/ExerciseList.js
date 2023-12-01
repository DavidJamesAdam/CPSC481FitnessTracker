import { useState } from "react";
import PopupFilter from "./PopupFilter";
import PortalPopup from "./PortalPopup";
import ExerciseListHeader from "./ExerciseListHeader";
import Property1Default5 from "./Property1Default5";
import Property1Default4 from "./Property1Default4";
import Property1Default3 from "./Property1Default3";
import Property1Default2 from "./Property1Default2";
import Property1Default1 from "./Property1Default1";
import Property1Default from "./Property1Default";
import styled from "styled-components";

const ExerciseListRoot = styled.div`border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 345px;
  height: 572px;
  overflow: hidden;
  height: ${(p) => p.exerciseListHeight}
  position: ${(p) => p.exerciseListPosition}
  top: ${(p) => p.exerciseListTop}
  left: ${(p) => p.exerciseListLeft}
`;

const ExerciseList = ({
  showRectangleIcon,
  showMuscle,
  exerciseListHeight,
  exerciseListPosition,
  exerciseListTop,
  exerciseListLeft,
}) => {
  const [isPopupFilterOpen, setPopupFilterOpen] = useState(false);
  return (
    <ExerciseListRoot
      exerciseListHeight={exerciseListHeight}
      exerciseListPosition={exerciseListPosition}
      exerciseListTop={exerciseListTop}
      exerciseListLeft={exerciseListLeft}
    >
      <ExerciseListHeader
        muscle="Muscle"
        showRectangleIcon
        showMuscle
        exerciseListHeaderWidth="242.2px"
        exerciseListHeaderPosition="absolute"
        exerciseListHeaderTop="10px"
        exerciseListHeaderLeft="51.4px"
        muscleHeight="77.65%"
        muscleWidth="34.27%"
        muscleTop="13.82%"
        muscleLeft="33.57%"
      />
      <Property1Default5
        property1DefaultPosition="absolute"
        property1DefaultTop="157px"
        property1DefaultLeft="2px"
      />
      <Property1Default4
        property1DefaultPosition="absolute"
        property1DefaultTop="232px"
        property1DefaultLeft="0px"
      />
      <Property1Default3
        property1DefaultPosition="absolute"
        property1DefaultTop="300px"
        property1DefaultLeft="0px"
      />
      <Property1Default2
        property1DefaultPosition="absolute"
        property1DefaultTop="375px"
        property1DefaultLeft="0px"
      />
      <Property1Default1
        property1DefaultPosition="absolute"
        property1DefaultTop="443px"
        property1DefaultLeft="0px"
      />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="511px"
        property1DefaultLeft="1px"
      />
    </ExerciseListRoot>
  );
};

export default ExerciseList;
