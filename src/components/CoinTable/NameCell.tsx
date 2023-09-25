import { Avatar, Box, Stack, Typography } from '@mui/material';

import { Coin } from '../../services';

export const NameCell = ({ row }: { row: Coin }) => (
    <Stack direction='row' spacing={3} alignItems='center'>
        <Avatar
            src={`https://assets.coincap.io/assets/icons/${row.symbol.toLowerCase()}@2x.png`}
            alt={'text'}
        />
        <Box>
            <Typography variant='subtitle1'>{row.name}</Typography>
            <Typography variant='body2'>{row.symbol}</Typography>
        </Box>
    </Stack>
);
