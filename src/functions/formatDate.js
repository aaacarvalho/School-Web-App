const formatDate = d => {

    const a = d.split('-')
    const f = `${a[2]}/${a[1]}/${a[0]}`

    return f
}

export default formatDate;
