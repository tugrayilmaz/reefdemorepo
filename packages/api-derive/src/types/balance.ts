import { Balance, CurrencyId } from '@reef-defi/types/interfaces';

export interface DerivedBalance {
  currency: CurrencyId | string;
  balance: Balance;
}

export type DerivedAllBalances = DerivedBalance[];
