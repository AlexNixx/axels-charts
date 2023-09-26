import { $api } from '../config/api.ts';
import { AxiosResponse } from 'axios';
import {
    CoinParams,
    CoinPricesResponse,
    CoinsResponse,
    FilterParams
} from './types';

export const getAllCoins = async (
    params?: FilterParams
): Promise<AxiosResponse<CoinsResponse>> => {
    return $api.get('/', { params });
};

export const getCoinPrices = async ({
    coinId,
    interval,
    start,
    end
}: CoinParams): Promise<AxiosResponse<CoinPricesResponse>> => {
    const params = new URLSearchParams();
    params.append('interval', interval);
    start && params.append('start', start.toString());
    end && params.append('end', end.toString());

    return $api.get(`${coinId}/history`, { params });
};
