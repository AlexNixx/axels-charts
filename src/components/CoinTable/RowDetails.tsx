import { CoinDetails } from '../CoinDetails';
import type { Coin } from '../../services';

interface RowDetailProps {
    row: Coin;
}

export const RowDetail = ({ row }: RowDetailProps) => (
    <CoinDetails coin={row} />
);
