const checkWorkTime = (start: number, end: number) => {
    const currentHour = new Date().getHours();
    if (currentHour >= start && currentHour < end) {
        return true;
    }
    return false;
};

export default checkWorkTime;
