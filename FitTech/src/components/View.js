import styled from "styled-components";

const View1 = styled.div`
  position: relative;
  font-weight: 300;
`;
const ViewRoot = styled.div`border-radius: var(--br-31xl);
  background-color: var(--color-dodgerblue);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 81px;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--white);
  font-family: var(--community);
  position: ${(p) => p.viewPosition};
  top: ${(p) => p.viewTop};
  left: ${(p) => p.viewLeft};
  cursor: ${(p) => p.viewCursor};
`;

const View = ({
  viewPosition,
  viewTop,
  viewLeft,
  viewCursor,
  onViewContainerClick,
}) => {
  return (
    <ViewRoot
      viewPosition={viewPosition}
      viewTop={viewTop}
      viewLeft={viewLeft}
      viewCursor={viewCursor}
      onClick={onViewContainerClick}
    >
      <View1>View</View1>
    </ViewRoot>
  );
};

export default View;
