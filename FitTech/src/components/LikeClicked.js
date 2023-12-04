import styled from "styled-components";

const LikeButtonFillIcon = styled.img`
  position: absolute;
  height: 94.74%;
  width: 90.48%;
  top: 0%;
  right: 4.76%;
  bottom: 5.26%;
  left: 4.76%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const AIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 74.76%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 25.24%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BIcon = styled.img`
  position: absolute;
  height: 74.74%;
  width: 31.43%;
  top: 20%;
  right: 68.57%;
  bottom: 5.26%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LikeClickedRoot = styled.div`
  width: 21px;
  height: 19px;
`;

const LikeClicked = () => {
  return (
    <LikeClickedRoot>
      <LikeButtonFillIcon alt="" src="/likebuttonfill.svg" />
      <AIcon alt="" src="/a.svg" />
      <BIcon alt="" src="/b.svg" />
    </LikeClickedRoot>
  );
};

export default LikeClicked;
