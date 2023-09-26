import { FC, useState } from 'react';
import { Chip, Stack } from '@mui/material';

import { filterList } from './filterList';
import type { Filter } from './filterList';

interface ChartFilterProps {
    activeFilter: Filter;
    setFilter: (filter: Filter) => void;
}

export const ChartFilter: FC<ChartFilterProps> = ({
    activeFilter,
    setFilter
}) => {
    const [active, setActive] = useState(
        filterList.find(filter => filter === activeFilter)
    );

    const handleSetFilter = (filter: Filter) => {
        setActive(filter);
        setFilter(filter);
    };

    return (
        <Stack direction='row' spacing={1}>
            {filterList.map(filter => (
                <Chip
                    color={
                        active?.startDay === filter.startDay
                            ? 'primary'
                            : 'secondary'
                    }
                    variant={
                        active?.startDay === filter.startDay
                            ? 'filled'
                            : 'outlined'
                    }
                    key={filter.label}
                    label={filter.label}
                    clickable
                    onClick={() => handleSetFilter(filter)}
                />
            ))}
        </Stack>
    );
};
