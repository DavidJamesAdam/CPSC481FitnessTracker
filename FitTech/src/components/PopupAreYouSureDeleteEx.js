import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";

const PopupAreYouSureDeleteExChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
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
  top: 49px;
  left: 41px;
`;
const MaterialSymbolscancelOutlinIcon = styled.img`
  position: absolute;
  top: 115px;
  left: 233px;
  width: 67px;
  height: 67px;
  overflow: hidden;
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

  return (
    <PopupAreYouSureDeleteExRoot>
      <PopupAreYouSureDeleteExChild />
      <AreYouSureContainer>
        <AreYouSure>Are you sure you</AreYouSure>
        <AreYouSure> want to delete exercise?</AreYouSure>
      </AreYouSureContainer>
      <LineMdconfirmCircleTwotoneIcon
        propTop="115px"
        propLeft="42px"
        propCursor="pointer"
        onLineMdconfirmCircleTwotoneClick={onLineMdconfirmCircleTwotoneClick}
      />
      <MaterialSymbolscancelOutlinIcon
        alt=""
        src="/materialsymbolscanceloutline.svg"
      />
    </PopupAreYouSureDeleteExRoot>
  );
};

export default PopupAreYouSureDeleteEx;
