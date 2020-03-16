import React from 'react';
import InputContainer from './InputContainer';

const ClassroomSelect = props => {

    const renderClassrooms = () => {
        let classrooms = '';

        if (props.classrooms.length)
            classrooms = props.classrooms.map(el => <option key={el.id}>{el.name}</option>)

        return classrooms;
    }

    return(
        <InputContainer>
            Sala de aula
            <select onChange={props.change}>
                {
                    renderClassrooms()
                }
            </select>
        </InputContainer>
    );
};

export default ClassroomSelect;
