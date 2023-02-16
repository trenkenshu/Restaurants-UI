const checkWorkTime = (start: number, end: number) => {
    const currentHour = new Date().getHours();
    if (currentHour >= start && currentHour < end) {
        console.log('true');
        return true;
    }
    console.log('false');
    return false;
};

export default checkWorkTime;
