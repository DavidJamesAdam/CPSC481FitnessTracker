import styled from "styled-components";

const B = styled.b`
  position: relative;
  -webkit-text-stroke: 1px #000;
`;
const Property1defaultRoot = styled.div`border-radius: var(--br-8xs);
  background-color: var(--color-dimgray-200);
  border: 1px solid var(--black);
  box-sizing: border-box;
  width: 345px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-8xs);
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--community);
  position: ${(p) => p.property1DefaultPosition}
  top: ${(p) => p.property1DefaultTop}
  left: ${(p) => p.property1DefaultLeft}
`;

const Property1Default4 = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  return (
    <Property1defaultRoot
      property1DefaultPosition={property1DefaultPosition}
      property1DefaultTop={property1DefaultTop}
      property1DefaultLeft={property1DefaultLeft}
    >
      <B>B</B>
    </Property1defaultRoot>
  );
};

export default Property1Default4;
