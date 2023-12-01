import styled from "styled-components";

const CommunityComponentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Community = styled.div`
  position: relative;
`;
const SelectedyesRoot = styled.div`background-color: var(--black);
  width: 70px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--body-1-size);
  color: var(--white);
  font-family: var(--community);
  width: ${(p) => p.selectedYesWidth}
  height: ${(p) => p.selectedYesHeight}
  cursor: ${(p) => p.selectedYesCursor}
`;

const SelectedYes = ({
  communityComponent,
  showCommunity,
  selectedYesWidth,
  selectedYesHeight,
  selectedYesCursor,
  onCommunityItemContainerClick,
}) => {
  return (
    <SelectedyesRoot
      selectedYesWidth={selectedYesWidth}
      selectedYesHeight={selectedYesHeight}
      selectedYesCursor={selectedYesCursor}
      onClick={onCommunityItemContainerClick}
    >
      <CommunityComponentIcon alt="" src={communityComponent} />
      {showCommunity && <Community>Community</Community>}
    </SelectedyesRoot>
  );
};

export default SelectedYes;
