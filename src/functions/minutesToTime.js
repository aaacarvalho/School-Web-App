const minutesToTime = minutes => {

    let time;

    if (minutes) {
        let h = Math.floor(minutes/60)
        let m = minutes % 60

        if (h < 10) 
            h =  `0${h}`

        if (m < 10)
            m = `0${m}`


        time = `${h}:${m}`
    } else {
        time = '00:00'
    }

    return time
};

export default minutesToTime;
