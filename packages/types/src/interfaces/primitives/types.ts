// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, i128, u128, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { EvmAddress } from '@reef-defi/types/interfaces/evm';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AuctionId */
export interface AuctionId extends u32 {}

/** @name AuctionIdOf */
export interface AuctionIdOf extends AuctionId {}

/** @name AuthoritysOriginId */
export interface AuthoritysOriginId extends Enum {
  readonly isRoot: boolean;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[TokenSymbol, TokenSymbol]>;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name Share */
export interface Share extends u128 {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isReef: boolean;
  readonly isRusd: boolean;
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
