const validateFields = obj => {
    let isValidated = true;
    let keys = Object.keys(obj);

    keys.map(e => {
        if (obj[e] === '')
            isValidated = false;
    });

    return isValidated;
}

export default validateFields;
