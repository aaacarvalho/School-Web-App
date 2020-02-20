import React from 'react';
import InputContainer from './InputContainer';

const ClassroomSelect = () => {

    return(
        <InputContainer>
            Sala de aula
            <select>
                <option>Selecione...</option>
                <option>Sala 1</option>
                <option>Sala 2</option>
                <option>Sala 3</option>
                <option>Sala 4</option>
                <option>Sala 5</option>
            </select>
        </InputContainer>
    );
};

export default ClassroomSelect;
