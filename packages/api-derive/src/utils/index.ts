import { ApiInterfaceRx } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';
import { CurrencyId } from '@reef-defi/types/interfaces';

export function getAllCollateralCurrencyIds(api: ApiInterfaceRx): Vec<CurrencyId> {
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
  return api.consts.cdpEngine.collateralCurrencyIds as Vec<CurrencyId>;
}
