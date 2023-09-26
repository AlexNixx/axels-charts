import { comparePriority } from '../../utils';

enum columnsNames {
    rank = 'rank',
    name = 'name',
    priceUsd = 'priceUsd',
    marketCapUsd = 'marketCapUsd',
    vwap24Hr = 'vwap24Hr',
    supply = 'supply',
    volumeUsd24Hr = 'volumeUsd24Hr',
    changePercent24Hr = 'changePercent24Hr'
}

enum columnsTitle {
    Rank = 'Rank',
    Name = 'Name',
    Price = 'Price',
    MarketCap = 'Market Cap',
    VWAP = 'VWAP (24Hr)',
    Supply = 'Supply',
    Volume = 'Volume (24Hr)',
    Change = 'Change (24Hr)'
}

type ColumnMapping = {
    name: columnsNames;
    title: columnsTitle;
};

export const columns: ColumnMapping[] = [
    { name: columnsNames.rank, title: columnsTitle.Rank },
    { name: columnsNames.name, title: columnsTitle.Name },
    { name: columnsNames.priceUsd, title: columnsTitle.Price },
    { name: columnsNames.marketCapUsd, title: columnsTitle.MarketCap },
    { name: columnsNames.vwap24Hr, title: columnsTitle.VWAP },
    { name: columnsNames.supply, title: columnsTitle.Supply },
    { name: columnsNames.volumeUsd24Hr, title: columnsTitle.Volume },
    { name: columnsNames.changePercent24Hr, title: columnsTitle.Change }
];

export const nameColumn = [columnsNames.name];
export const percentColumn = [columnsNames.changePercent24Hr];
export const currencyColumns = [
    columnsNames.priceUsd,
    columnsNames.marketCapUsd,
    columnsNames.vwap24Hr,
    columnsNames.supply,
    columnsNames.volumeUsd24Hr
];

export const columnsWidth = [
    { columnName: columnsNames.rank, width: 100 },
    { columnName: columnsNames.name, width: 300 }
];

export const sortingColumnExtensions = [
    { columnName: columnsNames.rank, compare: comparePriority },
    { columnName: columnsNames.priceUsd, compare: comparePriority },
    { columnName: columnsNames.marketCapUsd, compare: comparePriority },
    { columnName: columnsNames.vwap24Hr, compare: comparePriority },
    { columnName: columnsNames.supply, compare: comparePriority },
    { columnName: columnsNames.volumeUsd24Hr, compare: comparePriority },
    { columnName: columnsNames.changePercent24Hr, compare: comparePriority }
];
