import { DeriveCustom } from '@polkadot/api-derive';

import * as constants from './constants';

export const derive: DeriveCustom = { constants };

export * from './types';
