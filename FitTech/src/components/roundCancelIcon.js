import styled from "styled-components";

const cancelIconRoot = styled.img`
  position: absolute;
  width: 67px;
  height: 67px;
  cursor: pointer;
  top: ${(p) => p.propTop};
  left: ${(p) => p.propLeft};
  cursor: ${(p) => p.propCursor};
`;

const cancelIcon = ({
  propTop,
  propLeft,
  propCursor,
  cancelIconClick,
}) => {
  return (
    <cancelIconRoot
      src="/materialsymbolscanceloutline.svg"
      onClick={cancelIconClick}
      propTop={propTop}
      propLeft={propLeft}
      propCursor={propCursor}
    />
  );
};

export default cancelIcon;
