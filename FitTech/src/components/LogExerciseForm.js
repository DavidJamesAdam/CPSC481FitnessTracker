import styled from "styled-components";

const ExerciseBackground = styled.div`
    background-color: #D9D9D9;
    padding: 10px;
    width: 90%;
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ExerciseTitle = styled.div`
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Titles = styled.div`
    flex: 1;
    margin-right: ${(props) => props.margin || "none"};
`;

const SetBox = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 23px;
  height: 21px;

  ::before {
    content: '${props => props.text || ''}';
    font-size: 14px; /* You can adjust the font size as needed */
    color: var(--black); /* You can set the text color */
  }
`;

const RepBox = styled.input`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 48px;
  height: 21px;
`;

const RemoveSetButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-dodgerblue);
  width: 70px;
  height: 21px;
  box-sizing: border-box;
  padding-top: 5px;
  font-size: 10px;
`;

const Empty = styled.div`
  flex: 1.5;
`;

const AddSetButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-dodgerblue);
  width: 80px;
  height: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  text-align: left;
  margin-top: 20px;
`;


const LogExerciseForm = ({ exerciseTitle }) => {
    return (
        <>
            <ExerciseBackground>
                <ExerciseTitle>{exerciseTitle}</ExerciseTitle>
                <FormWrapper>
                    <RowWrapper>
                        <Titles>Set</Titles>
                        <Titles margin="20px">Rep</Titles>
                        <Titles>Weight</Titles>
                        <Empty></Empty>
                    </RowWrapper>
                    <RowWrapper>
                        <SetBox>1</SetBox>
                        <RepBox type="number"/>
                        <RepBox type="number"/>
                        <RemoveSetButton>Remove set</RemoveSetButton>
                    </RowWrapper>
                    <RowWrapper>
                        <SetBox>2</SetBox>
                        <RepBox type="number"/>
                        <RepBox type="number"/>
                        <RemoveSetButton>Remove set</RemoveSetButton>
                    </RowWrapper>
                    <RowWrapper>
                        <SetBox>3</SetBox>
                        <RepBox type="number"/>
                        <RepBox type="number"/>
                        <RemoveSetButton>Remove set</RemoveSetButton>
                    </RowWrapper>
                </FormWrapper>
                <AddSetButton>Add Set</AddSetButton>
            </ExerciseBackground>
        </>
    )
}

export default LogExerciseForm;