import { FixedPointNumber } from './fixed-point-number';

export type CHAIN = 'maldives' | unknown;

export interface Token {
  symbol: string;
  precision: number;
}

export interface TokenBalance extends Token {
  balance: FixedPointNumber;
}
