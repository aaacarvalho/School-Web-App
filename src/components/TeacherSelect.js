import React from 'react';
import InputContainer from './InputContainer';

const TeacherSelect = () => {

    return(
        <InputContainer>
            Professor
            <select>
                <option>Selecione...</option>
                <option>Professor 1</option>
                <option>Professor 2</option>
                <option>Professor 3</option>
                <option>Professor 4</option>
                <option>Professor 5</option>
            </select>
        </InputContainer>
    );
};

export default TeacherSelect;
