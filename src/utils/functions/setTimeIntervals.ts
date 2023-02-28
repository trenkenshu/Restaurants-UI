const setTimeIntervals = (start: number, end: number) => {
    const intervals = Array(end - start + 1)
        .fill(0)
        .map((_, i) => start + i);
    return intervals;
};

export default setTimeIntervals;
