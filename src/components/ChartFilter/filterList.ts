import { Interval } from '../../services';
import { getCurrentDateInMilliseconds } from '../../utils';

export type Filter = {
    label: string;
    interval: Interval;
    startDay: number;
};

type FilterList = Filter[];

const DAY_IN_MILLISECONDS = 86400000;
const WEEK_IN_MILLISECONDS = DAY_IN_MILLISECONDS * 7;
const MONTH_IN_MILLISECONDS = WEEK_IN_MILLISECONDS * 4;
const SIX_MONTHS_IN_MILLISECONDS = MONTH_IN_MILLISECONDS * 6;

export const filterList: FilterList = [
    {
        label: '1D',
        interval: 'h1',
        startDay: getCurrentDateInMilliseconds() - DAY_IN_MILLISECONDS
    },
    {
        label: '1W',
        interval: 'h1',
        startDay: getCurrentDateInMilliseconds() - WEEK_IN_MILLISECONDS
    },
    {
        label: '1M',
        interval: 'd1',
        startDay: getCurrentDateInMilliseconds() - MONTH_IN_MILLISECONDS
    },
    {
        label: '6M',
        interval: 'd1',
        startDay: getCurrentDateInMilliseconds() - SIX_MONTHS_IN_MILLISECONDS
    }
];
