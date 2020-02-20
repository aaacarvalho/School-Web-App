import React from 'react';
import InputContainer from './InputContainer';

const StudentSelect = () => {

    return(
        <InputContainer>
            Aluno
            <select>
                <option>Selecione...</option>
                <option>Aluno 1</option>
                <option>Aluno 2</option>
                <option>Aluno 3</option>
                <option>Aluno 4</option>
                <option>Aluno 5</option>
            </select>
        </InputContainer>
    );
};

export default StudentSelect;
