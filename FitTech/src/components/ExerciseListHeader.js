import { useState, useCallback } from "react";
import PopupFilter from "./PopupFilter";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";

const ExerciseListHeaderChild = styled.img`
  position: absolute;
  top: 0px;
  left: 69px;
  border-radius: var(--br-8xs);
  width: 105px;
  height: 36px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 204px;
  width: 26.2px;
  height: 24px;
`;
const MdifilterIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 248px;
  width: 34px;
  height: 34px;
  cursor: pointer;
`;
const Muscle = styled.div`position: absolute;
  height: 77.78%;
  width: 34.25%;
  top: 13.89%;
  left: 33.56%;
  display: flex;
  align-items: flex-end;
  height: ${(p) => p.muscleHeight}
  width: ${(p) => p.muscleWidth}
  top: ${(p) => p.muscleTop}
  left: ${(p) => p.muscleLeft}
`;
const ExerciseListHeaderRoot = styled.div`width: 292px;
  height: 36px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--black);
  font-family: var(--community);
  width: ${(p) => p.exerciseListHeaderWidth}
  position: ${(p) => p.exerciseListHeaderPosition}
  top: ${(p) => p.exerciseListHeaderTop}
  left: ${(p) => p.exerciseListHeaderLeft}
`;

const ExerciseListHeader = ({
  muscle,
  showRectangleIcon,
  showMuscle,
  exerciseListHeaderWidth,
  exerciseListHeaderPosition,
  exerciseListHeaderTop,
  exerciseListHeaderLeft,
  muscleHeight,
  muscleWidth,
  muscleTop,
  muscleLeft,
}) => {
  const [isPopupFilterOpen, setPopupFilterOpen] = useState(false);

  const openPopupFilter = useCallback(() => {
    setPopupFilterOpen(true);
  }, []);

  const closePopupFilter = useCallback(() => {
    setPopupFilterOpen(false);
  }, []);

  return (
    <>
      <ExerciseListHeaderRoot
        exerciseListHeaderWidth={exerciseListHeaderWidth}
        exerciseListHeaderPosition={exerciseListHeaderPosition}
        exerciseListHeaderTop={exerciseListHeaderTop}
        exerciseListHeaderLeft={exerciseListHeaderLeft}
      >
        {showRectangleIcon && (
          <ExerciseListHeaderChild alt="" src="/rectangle-27.svg" />
        )}
        <VectorIcon alt="" src="/vector.svg" />
        <MdifilterIcon alt="" src="/mdifilter1.svg" onClick={openPopupFilter} />
        {showMuscle && (
          <Muscle
            muscleHeight={muscleHeight}
            muscleWidth={muscleWidth}
            muscleTop={muscleTop}
            muscleLeft={muscleLeft}
          >
            {muscle}
          </Muscle>
        )}
      </ExerciseListHeaderRoot>
      {isPopupFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupFilter}
        >
          <PopupFilter onClose={closePopupFilter} />
        </PortalPopup>
      )}
    </>
  );
};

export default ExerciseListHeader;
