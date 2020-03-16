import React from 'react';
import InputContainer from './InputContainer';

const TeacherSelect = props => {

    const renderTeachers = () => {
        let teachers = '';

        if (props.teachers) {
            teachers = props.teachers.map(el => <option key={el.id} value={el.id}>{el.first_name} {el.last_name}</option>)
        }

        return teachers;
    }

    return(
        <InputContainer>
            Professor
            <select onChange={props.change}>
                {
                    renderTeachers()
                }
            </select>
        </InputContainer>
    );
};

export default TeacherSelect;
