import styled from "styled-components";
import LineMdconfirmCircleTwotoneIcon from "./LineMdconfirmCircleTwotoneIcon";

const PopupAreYouSureDeleteWoChild = styled.div`
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
  left: 42px;
`;
const MaterialSymbolscancelOutlinIcon = styled.img`
  position: absolute;
  top: 115px;
  left: 233px;
  width: 67px;
  height: 67px;
  overflow: hidden;
`;
const PopupAreYouSureDeleteWoRoot = styled.div`
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

const PopupAreYouSureDeleteWo = () => {
  return (
    <PopupAreYouSureDeleteWoRoot>
      <PopupAreYouSureDeleteWoChild />
      <AreYouSureContainer>
        <AreYouSure>Are you sure you</AreYouSure>
        <AreYouSure> want to delete workout?</AreYouSure>
      </AreYouSureContainer>
      <LineMdconfirmCircleTwotoneIcon
        propTop="115px"
        propLeft="42px"
        propCursor="unset"
      />
      <MaterialSymbolscancelOutlinIcon
        alt=""
        src="/materialsymbolscanceloutline.svg"
      />
    </PopupAreYouSureDeleteWoRoot>
  );
};

export default PopupAreYouSureDeleteWo;
