import styled from "styled-components";

const HomeComponentIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;
const HomeItemselected3Root = styled.div`
  background-color: var(--black);
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 0px;
  box-sizing: border-box;
`;

const HomeItemSelected3 = () => {
  return (
    <HomeItemselected3Root>
      <HomeComponentIcon alt="" src="/home-component1.svg" />
    </HomeItemselected3Root>
  );
};

export default HomeItemSelected3;
