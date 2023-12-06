import styled from "styled-components";
import SetWrapper from "./SetWrapper";
import React, { useState } from "react";
import LoggedSetWrapper from "./LoggedSetWrapper";

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
  cursor: pointer;
`;


const LoggedExerciseView = ({ exerciseTitle }) => {

    const removeSetClick = (setNumber) => {
        setSets(sets.filter((set) => {
            console.log(sets);
            console.log(`set props: ${set.props.setNumber}`);
            console.log(`set number ${setNumber}`);
            return set.props.setNumber !== setNumber;
        }))
    }

    const [sets, setSets] = useState([<LoggedSetWrapper setNumber='1' removeClick={removeSetClick}/>, <LoggedSetWrapper setNumber='2' removeClick={removeSetClick}/>, <LoggedSetWrapper setNumber='3' removeClick={removeSetClick}/>])

    const addSetClick = () => {
        setSets([...sets, <LoggedSetWrapper setNumber={sets.length + 1} removeClick={removeSetClick}/>])
    }

    return (
        <>
            <ExerciseBackground>
                <ExerciseTitle>{exerciseTitle}</ExerciseTitle>
                <FormWrapper>
                    <RowWrapper>
                        <Titles>Set</Titles>
                        <Titles margin="20px">Rep</Titles>
                        <Titles>Weight</Titles>
                    </RowWrapper>
                    {sets.map((set, index) => (
                        <React.Fragment key={index}>{set}</React.Fragment>
                    ))}
                    {/* <SetWrapper setNumber='1'/>
                    <SetWrapper setNumber='2'/>
                    <SetWrapper setNumber='3'/> */}
                </FormWrapper>
                {console.log(sets)}
            </ExerciseBackground>
        </>
    )
}

export default LoggedExerciseView;