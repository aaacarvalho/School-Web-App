import React from 'react';
import InputContainer from './InputContainer';

const SubjectSelect = props => {

    const renderSubjects = () => {
        let subjects = '';

        if (props.subjects) {
            subjects = props.subjects.map(el => <option key={el.id} value={el.id}>{el.name}</option>)
        }

        return subjects;
    }

    return(
        <InputContainer>
            Matéria
            <select onChange={props.change}>
                {
                    renderSubjects()
                }
            </select>
        </InputContainer>
    );
};

export default SubjectSelect;
