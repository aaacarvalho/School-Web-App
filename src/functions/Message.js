import React from 'react';

const Message = (status, message = 'Preencha os campos necessários!') => {
    let response;
    
    switch (status) {
        case 'success':
            response = <p className='message message--success'>A operação foi realizada com sucesso!</p>
        break;
        case 'warning':
            response = <p className='message message--warning'>{message}</p>
        break;
        case 'error':
            response = <p className='message message--error'>Houve um erro ao realizar a operação.</p>
        break;
        default:
            response = <p></p>
        break;
    }

    return response
};

export default Message;
