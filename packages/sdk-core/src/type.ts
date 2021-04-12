import { FixedPointNumber } from './fixed-point-number';

export type KNOWN_MODULES = 'honzon' | 'swap' | 'homa';

export type CHAIN = 'reef' | 'kurara' | 'polkadot' | 'kusama' | unknown;

export interface Token {
  symbol: string;
  precision: number;
}

export interface TokenBalance extends Token {
  balance: FixedPointNumber;
}
