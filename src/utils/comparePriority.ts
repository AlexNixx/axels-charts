export const comparePriority = (a: number | string, b: number | string) => {
    const [value1, value2] = [Number(a), Number(b)];

    if (value1 === value2) {
        return 0;
    }
    return value1 < value2 ? -1 : 1;
};
