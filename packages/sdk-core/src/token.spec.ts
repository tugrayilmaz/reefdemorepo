import { Token } from './token';

describe('token', () => {
  const t1 = new Token({ name: 'Token1', symbol: 'T1', chain: 'reef', decimal: 18 });

  test('token constructor should work', () => {
    expect(t1.name).toEqual('Token1');
    expect(t1.symbol).toEqual('T1');
    expect(t1.chain).toEqual('reef');
    expect(t1.decimal).toEqual(18);
  });

  test('clone tokens should work', () => {
    const t2 = t1.clone();

    expect(t2.name).toEqual('Token1');
    expect(t2.symbol).toEqual('T1');
    expect(t2.chain).toEqual('reef');
    expect(t2.decimal).toEqual(18);
  });

  test('fromCurrencyId set default token decimal should work', () => {
    const mockREEF = { asToken: { toString: () => 'REEF' }, isToken: true };
    const mockAUSD = { asToken: { toString: () => 'AUSD' }, isToken: true };
    const mockDOT = { asToken: { toString: () => 'DOT' }, isToken: true };

    expect(Token.fromCurrencyId(mockREEF as any).decimal).toEqual(13);
    expect(Token.fromCurrencyId(mockAUSD as any).decimal).toEqual(12);
    expect(Token.fromCurrencyId(mockDOT as any).decimal).toEqual(10);
  });

  test('toChainData should work', () => {
    expect(t1.toChainData()).toEqual({ Token: 'T1' });
  });

  test('isEqual should work', () => {
    const t2 = t1.clone();
    const t3 = new Token({ name: 'T3', symbol: 'T3', chain: 'reef' });

    expect(t1.isEqual(t2)).toEqual(true);
    expect(t1.isEqual(t3)).toEqual(false);
  });

  test('toString should work', () => {
    expect(t1.toString()).toEqual('Token1');
  });

  test('sort tokens should work', () => {
    const reef = new Token({ name: 'REEF', symbol: 'REEF', chain: 'reef', decimal: 18 });
    const xbtc = new Token({ name: 'XBTC', symbol: 'XBTC', chain: 'reef', decimal: 16 });
    const renbtc = new Token({ name: 'RENBTC', symbol: 'RENBTC', chain: 'reef', decimal: 16 });

    expect(Token.sort(reef, xbtc)).toEqual([reef, xbtc]);
    expect(Token.sort(xbtc, reef)).toEqual([reef, xbtc]);
    expect(Token.sort(xbtc, renbtc, reef)).toEqual([reef, xbtc, renbtc]);
  });
});
