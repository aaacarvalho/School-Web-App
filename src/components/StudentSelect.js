import React from 'react';
import InputContainer from './InputContainer';

const StudentSelect = props => {

    const renderStudents = () => {
        let students = '';

        if (props.students) {
            students = props.students.map(el => <option key={el.id}>{el.first_name} {el.last_name}</option>)
        }

        return students;
    }

    return(
        <InputContainer>
            Aluno
            <select onChange={props.change}>
                {
                    renderStudents()
                }
            </select>
        </InputContainer>
    );
};

export default StudentSelect;
