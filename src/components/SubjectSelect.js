import React from 'react';
import InputContainer from './InputContainer';

const SubjectSelect = () => {

    return(
        <InputContainer>
            Matéria
            <select>
                <option>Selecione...</option>
                <option>Disciplina 1</option>
                <option>Disciplina 2</option>
                <option>Disciplina 3</option>
                <option>Disciplina 4</option>
                <option>Disciplina 5</option>
            </select>
        </InputContainer>
    );
};

export default SubjectSelect;
