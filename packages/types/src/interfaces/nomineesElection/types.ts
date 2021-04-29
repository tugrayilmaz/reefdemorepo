// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Compact, Struct, Vec } from '@polkadot/types';
import type { EraIndex, UnlockChunk } from '@polkadot/types/interfaces/staking';
import type { Balance } from '@reef-defi/types/interfaces/runtime';

/** @name BondingLedger */
export interface BondingLedger extends Struct {
  readonly total: Compact<Balance>;
  readonly active: Compact<Balance>;
  readonly unlocking: Vec<UnlockChunk>;
}

/** @name HomaUnlockChunk */
export interface HomaUnlockChunk extends Struct {
  readonly value: Compact<Balance>;
  readonly era: Compact<EraIndex>;
}

export type PHANTOM_NOMINEESELECTION = 'nomineesElection';
