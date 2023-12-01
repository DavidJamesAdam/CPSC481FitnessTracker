import { useState } from "react";
import PopupFilter from "./PopupFilter";
import PortalPopup from "./PortalPopup";
import ExerciseListHeader from "./ExerciseListHeader";
import styled from "styled-components";
import Property1BChestExerciseP from "./Property1BChestExerciseP";
import Property1DChestExercise from "./Property1DChestExercise";
import Property1CChestExercise from "./Property1CChestExercise";
import Property1Variant3 from "./Property1Variant3";

const ExerciseListHeaderWrapper = styled.div`
  position: relative;
  width: 242.2px;
  height: 34px;
`;
const ChestExeriseListRoot = styled.div`border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 345px;
  height: 528px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-11xl);
  position: ${(p) => p.chestExeriseListPosition}
  top: ${(p) => p.chestExeriseListTop}
  left: ${(p) => p.chestExeriseListLeft}
`;

const ChestExeriseList = ({
  muscle,
  rectangleIcon,
  muscle1,
  chestExeriseListPosition,
  chestExeriseListTop,
  chestExeriseListLeft,
}) => {
  const [isPopupFilterOpen, setPopupFilterOpen] = useState(false);
  return (
    <ChestExeriseListRoot
      chestExeriseListPosition={chestExeriseListPosition}
      chestExeriseListTop={chestExeriseListTop}
      chestExeriseListLeft={chestExeriseListLeft}
    >
      <ExerciseListHeaderWrapper>
        <ExerciseListHeader
          muscle="Muscle"
          showRectangleIcon={false}
          showMuscle={false}
          exerciseListHeaderWidth="242.2px"
          exerciseListHeaderPosition="absolute"
          exerciseListHeaderTop="0px"
          exerciseListHeaderLeft="0px"
          muscleHeight="77.65%"
          muscleWidth="34.27%"
          muscleTop="13.82%"
          muscleLeft="33.57%"
        />
      </ExerciseListHeaderWrapper>
      <Property1BChestExerciseP />
      <Property1DChestExercise />
      <Property1CChestExercise />
      <Property1Variant3 />
    </ChestExeriseListRoot>
  );
};

export default ChestExeriseList;
