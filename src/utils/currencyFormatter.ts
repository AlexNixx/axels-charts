export const currencyFormatter = (
    value: number | string,
    minimumFractionDigits?: number,
    notation?: 'standard' | 'scientific' | 'engineering' | 'compact' | undefined
) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: notation ? notation : 'standard',
        minimumFractionDigits: minimumFractionDigits || 4
    }).format(Number(value));
