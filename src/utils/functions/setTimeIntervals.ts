// const range = (min, max) => Array(max - min + 1).fill(0).map((_, i) => min + i);
const setTimeIntervals = (start: number, end: number) => {
    const intervals = Array(end - start + 1)
        .fill(0)
        .map((_, i) => start + i);
    return intervals;
};

export default setTimeIntervals;
