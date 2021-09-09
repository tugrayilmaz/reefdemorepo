// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u32 } from '@polkadot/types';
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
export interface LockDuration extends Enum {
  readonly isOneMonth: boolean;
  readonly isOneYear: boolean;
  readonly isTenYears: boolean;
}

export type PHANTOM_POC = 'poc';
