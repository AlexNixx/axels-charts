export const calculateHighPrice = (data: number[]) => Math.max(...data);

export const calculateLowPrice = (data: number[]) => Math.min(...data);

export const calculateAveragePrice = (data: number[]) =>
    data.reduce((a, b) => Number(a) + Number(b), 0) / data.length;

export const calculateChangePercent = (data: number[]) => {
    const firstNumber = data[0];
    const lastNumber = data[data.length - 1];
    return ((lastNumber - firstNumber) / firstNumber) * 100;
};
