import styled from "styled-components";

const LineMdconfirmCircleTwotoneIconRoot = styled.img`position: absolute;
  top: 680px;
  left: 299px;
  width: 67px;
  height: 67px;
  cursor: pointer;
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
  cursor: ${(p) => p.propCursor}
`;

const LineMdconfirmCircleTwotoneIcon = ({
  propTop,
  propLeft,
  propCursor,
  onLineMdconfirmCircleTwotoneClick,
}) => {
  return (
    <LineMdconfirmCircleTwotoneIconRoot
      alt=""
      src="/linemdconfirmcircletwotone.svg"
      onClick={onLineMdconfirmCircleTwotoneClick}
      propTop={propTop}
      propLeft={propLeft}
      propCursor={propCursor}
    />
  );
};

export default LineMdconfirmCircleTwotoneIcon;
