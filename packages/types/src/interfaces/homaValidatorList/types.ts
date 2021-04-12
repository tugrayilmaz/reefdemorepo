// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, Balance, BlockNumber } from '@reef-defi/types/interfaces/runtime';

/** @name Guarantee */
export interface Guarantee extends Struct {
  readonly total: Balance;
  readonly bonded: Balance;
  readonly unbonding: Option<ITuple<[Balance, BlockNumber]>>;
}

/** @name RelaychainAccountId */
export interface RelaychainAccountId extends AccountId {}

/** @name SlashInfo */
export interface SlashInfo extends Struct {
  readonly validator: RelaychainAccountId;
  readonly relaychainTokenAmount: Balance;
}

/** @name ValidatorBacking */
export interface ValidatorBacking extends Struct {
  readonly totalInsurance: Balance;
  readonly isFrozen: Boolean;
}

export type PHANTOM_HOMAVALIDATORLIST = 'homaValidatorList';
