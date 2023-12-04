import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";
import cancelIcon from "./roundCancelIcon";

const PopupAreYouSureDeleteExChild = styled.div`
  position: absolute;
  top: 20%;
  left: 36%;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 341px;
  height: 196px;
`;
const AreYouSure = styled.p`
  margin: 0;
`;
const AreYouSureContainer = styled.div`
  position: absolute;
  top: 22%;
  left: 39%;
`;
const MaterialSymbolscancelOutlinIcon = styled.img`
  position: absolute;
  top: 34%;
  left: 51%;
  width: 67px;
  height: 67px;
  overflow: hidden;
  cursor: pointer;
`;
const PopupAreYouSureDeleteExRoot = styled.div`
  width: 341px;
  height: 196px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--black);
  font-family: var(--community);
`;

const PopupAreYouSureDeleteEx = () => {
  const navigate = useNavigate();

  const onLineMdconfirmCircleTwotoneClick = useCallback(() => {
    navigate("/workout-screen-populate-workout-list");
  }, [navigate]);

  const cancel = useCallback(() => {
    navigate("/workout-screen-exercise-added");
  },
  [navigate]
  );

  return (
    <PopupAreYouSureDeleteExRoot>
      <PopupAreYouSureDeleteExChild />
      <AreYouSureContainer>
        <AreYouSure>Are you sure you</AreYouSure>
        <AreYouSure> want to delete exercise?</AreYouSure>
      </AreYouSureContainer>
      <LineMdconfirmCircleTwotoneIcon
        propTop="34%"
        propLeft="40%"
        propCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
      <MaterialSymbolscancelOutlinIcon
        src = "/materialsymbolscanceloutline.svg"
        propTop="34%"
        propLeft="40%"
        propCursor="pointer"
        onClick={cancel}
      />
    </PopupAreYouSureDeleteExRoot>
  );
};

export default PopupAreYouSureDeleteEx;
