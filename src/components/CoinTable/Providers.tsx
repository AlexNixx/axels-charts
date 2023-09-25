import { DataTypeProvider } from '@devexpress/dx-react-grid';

import { NameCell as NameFormatter } from './NameCell.tsx';
import { currencyFormatter, percentFormatter } from '../../utils';

type ProviderProps = {
    for: Array<string>;
};

type FormatterComponentProps = {
    value: string;
};

export const NameTypeProvider = (props: ProviderProps) => (
    <DataTypeProvider formatterComponent={NameFormatter} {...props} />
);

export const CurrencyTypeProvider = (props: ProviderProps) => (
    <DataTypeProvider
        formatterComponent={({ value }: FormatterComponentProps) =>
            currencyFormatter(value, 4, 'compact')
        }
        {...props}
    />
);

export const PercentTypeProvider = (props: ProviderProps) => (
    <DataTypeProvider
        formatterComponent={({ value }: FormatterComponentProps) =>
            percentFormatter(value)
        }
        {...props}
    />
);
