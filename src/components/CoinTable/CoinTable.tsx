import { useEffect, useState } from 'react';
import {
    Grid,
    PagingPanel,
    SearchPanel,
    Table,
    TableHeaderRow,
    TableRowDetail,
    Toolbar
} from '@devexpress/dx-react-grid-material-ui';
import {
    IntegratedFiltering,
    IntegratedPaging,
    IntegratedSorting,
    PagingState,
    RowDetailState,
    SearchState,
    SortingState
} from '@devexpress/dx-react-grid';

import { RowDetail } from './RowDetails';
import {
    CurrencyTypeProvider,
    NameTypeProvider,
    PercentTypeProvider
} from './Providers';
import {
    columns,
    columnsWidth,
    currencyColumns,
    nameColumn,
    percentColumn,
    sortingColumnExtensions
} from './columns';

import { getAllCoins } from '../../services';
import type { Coin } from '../../services';

export const CoinTable = () => {
    const [rows, setRows] = useState<Coin[]>([]);
    const [expandedRowIds, setExpandedRowIds] = useState([]);

    const getData = async () => {
        try {
            const response = await getAllCoins({});
            return response.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData().then(data => setRows(data || []));
    }, []);

    return (
        <Grid rows={rows} columns={columns}>
            <NameTypeProvider for={nameColumn} />
            <CurrencyTypeProvider for={currencyColumns} />
            <PercentTypeProvider for={percentColumn} />
            <SortingState />
            <IntegratedSorting columnExtensions={sortingColumnExtensions} />
            <RowDetailState
                expandedRowIds={expandedRowIds}
                onExpandedRowIdsChange={setExpandedRowIds}
            />
            <SearchState />
            <IntegratedFiltering />
            <PagingState defaultCurrentPage={0} defaultPageSize={10} />
            <IntegratedPaging />
            <Table columnExtensions={columnsWidth} />

            <TableHeaderRow showSortingControls />
            <TableRowDetail contentComponent={RowDetail} />
            <PagingPanel pageSizes={[5, 10, 15, 0]} />
            <Toolbar />
            <SearchPanel />
        </Grid>
    );
};
