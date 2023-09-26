export type FilterParams = {
    search?: string;
    ids?: string;
    limit?: number;
    offset?: number;
};

export type Coin = {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
};

export type CoinsResponse = {
    data: Coin[];
};

export type Interval =
    | 'm1'
    | 'm5'
    | 'm15'
    | 'm30'
    | 'h1'
    | 'h2'
    | 'h6'
    | 'h12'
    | 'd1';

export type CoinParams = {
    coinId: string;
    interval: Interval;
    start?: number;
    end?: number;
};

export type CoinPriceTimeStamp = {
    date: string;
    priceUsd: string;
    time: Date;
};

export type CoinPricesResponse = {
    data: CoinPriceTimeStamp[];
};
