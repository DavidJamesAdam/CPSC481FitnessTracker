import styled from "styled-components";

const PopupSearchBarChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-8xs);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--black);
  box-sizing: border-box;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 48.98%;
  width: 9.96%;
  top: 24.49%;
  right: 83.57%;
  bottom: 26.53%;
  left: 6.46%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FluentarrowEnterLeft20FilIcon = styled.img`
  position: absolute;
  height: 73.47%;
  width: 13.31%;
  top: 12.24%;
  right: 4.94%;
  bottom: 14.29%;
  left: 81.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Label = styled.div`
  position: relative;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: none;
`;
const Textbox = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--gray);
`;
const Input = styled.div`
  position: absolute;
  width: 59.7%;
  top: calc(50% - 15.5px);
  right: 20.15%;
  left: 20.15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const PopupSearchBarRoot = styled.div`
  width: 263px;
  height: 49px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--input-field-label-size);
  color: var(--black);
  font-family: var(--input-field-label);
`;

const PopupSearchBar = () => {
  return (
    <PopupSearchBarRoot>
      <PopupSearchBarChild />
      <VectorIcon alt="" src="/vector.svg" />
      <FluentarrowEnterLeft20FilIcon
        alt=""
        src="/fluentarrowenterleft20filled.svg"
      />
      <Input>
        <Label>Label</Label>
        <Textbox />
      </Input>
    </PopupSearchBarRoot>
  );
};

export default PopupSearchBar;
