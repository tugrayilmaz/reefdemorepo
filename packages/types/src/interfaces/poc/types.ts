// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u32 } from '@polkadot/types';
import type { AccountId, BalanceOf, BlockNumber } from '@reef-defi/types/interfaces/runtime';

/** @name CommitmentOf */
export interface CommitmentOf extends Struct {
  readonly duration: LockDuration;
  readonly amount: BalanceOf;
  readonly candidate: AccountId;
}

/** @name Era */
export interface Era extends Struct {
  readonly index: u32;
  readonly start: BlockNumber;
}

/** @name LockDuration */
export interface LockDuration extends Struct {
  readonly OneMonth: 0;
  readonly OneYear: 1;
  readonly TenYears: 2;
}

export type PHANTOM_POC = 'poc';
