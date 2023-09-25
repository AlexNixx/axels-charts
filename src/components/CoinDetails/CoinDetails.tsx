import { FC, useEffect, useState } from 'react';
import { Avatar, Grid, Stack, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import { ChartFilter, filterList } from '../ChartFilter';
import type { Filter } from '../ChartFilter';

import { getCoinPrices } from '../../services';
import type { Coin } from '../../services';

import {
    currencyFormatter,
    getCurrentDateInMilliseconds,
    percentFormatter,
    calculateAveragePrice,
    calculateChangePercent,
    calculateHighPrice,
    calculateLowPrice
} from '../../utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface CoinDetailsProps {
    coin: Coin;
}

export const CoinDetails: FC<CoinDetailsProps> = ({ coin }) => {
    const [labels, setLabels] = useState<Date[]>([]);
    const [coinData, setCoinData] = useState<number[]>([]);
    const [filter, setFilter] = useState<Filter>(filterList[0]);

    const formattedLabels = labels.map(dateString =>
        filter.interval === 'h1'
            ? moment(dateString).format('LT')
            : moment(dateString).format('L')
    );
    const formattedTooltipLabels = labels.map(dateString =>
        moment(dateString).format('ll')
    );

    const data = {
        labels: formattedLabels,
        datasets: [
            {
                data: coinData,
                backgroundColor: '#2196F3',
                borderColor: '#2196F3'
            }
        ]
    };

    const options: ChartOptions<'line'> = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = formattedTooltipLabels[context.dataIndex];

                        if (context.parsed.y !== null) {
                            label += ` : ${currencyFormatter(
                                Number(context.parsed.y),
                                6
                            )}`;
                        }

                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return currencyFormatter(Number(value), 2, 'compact');
                    }
                }
            }
        }
    };

    const getData = async () => {
        try {
            const coinParams = {
                coinId: coin.id,
                interval: filter.interval,
                start: filter.startDay,
                end: getCurrentDateInMilliseconds()
            };

            const response = await getCoinPrices(coinParams);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData().then(data => {
            const labels = data?.map(item => item.time);
            const prices = data?.map(item => Number(item.priceUsd));
            setLabels(labels || []);
            setCoinData(prices || []);
        });
    }, [filter]);

    return (
        <Grid>
            <Grid item container xs={12} alignItems='center'>
                <Grid item container direction='row' alignItems='center' xs>
                    <Avatar
                        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                        alt={'text'}
                        sx={{
                            height: '72px',
                            width: '72px',
                            marginRight: '15px'
                        }}
                    />
                    <Typography variant='h6'>
                        {coin.name} ({coin.symbol})
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Stack direction='row' sx={{ alignItems: 'center' }}>
                        <Typography sx={{ marginRight: '5px' }}>
                            HIGH:
                        </Typography>
                        <Typography>
                            {currencyFormatter(calculateHighPrice(coinData))}
                        </Typography>
                    </Stack>
                    <Stack direction='row' sx={{ alignItems: 'center' }}>
                        <Typography sx={{ marginRight: '5px' }}>
                            LOW:
                        </Typography>
                        <Typography>
                            {currencyFormatter(calculateLowPrice(coinData))}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs>
                    <Stack direction='row' sx={{ alignItems: 'center' }}>
                        <Typography sx={{ marginRight: '5px' }}>
                            AVERAGE:
                        </Typography>
                        <Typography>
                            {currencyFormatter(calculateAveragePrice(coinData))}
                        </Typography>
                    </Stack>
                    <Stack direction='row' sx={{ alignItems: 'center' }}>
                        <Typography sx={{ marginRight: '5px' }}>
                            CHANGE:
                        </Typography>
                        <Typography>
                            {percentFormatter(calculateChangePercent(coinData))}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs>
                    <ChartFilter activeFilter={filter} setFilter={setFilter} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Line data={data} options={options} />
            </Grid>
        </Grid>
    );
};
