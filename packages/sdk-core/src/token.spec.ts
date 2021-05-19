import { Token } from './token';

describe('token', () => {
  const t1 = new Token({ name: 'Token1', symbol: 'T1', chain: 'maldives', decimal: 18 });

  test('token constructor should work', () => {
    expect(t1.name).toEqual('Token1');
    expect(t1.symbol).toEqual('T1');
    expect(t1.chain).toEqual('maldives');
    expect(t1.decimal).toEqual(18);
  });

  test('clone tokens should work', () => {
    const t2 = t1.clone();

    expect(t2.name).toEqual('Token1');
    expect(t2.symbol).toEqual('T1');
    expect(t2.chain).toEqual('maldives');
    expect(t2.decimal).toEqual(18);
  });

  test('fromCurrencyId set default token decimal should work', () => {
    const mockREEF = { asToken: { toString: () => 'REEF' }, isToken: true };
    const mockRUSD = { asToken: { toString: () => 'RUSD' }, isToken: true };

    expect(Token.fromCurrencyId(mockREEF as any).decimal).toEqual(18);
    expect(Token.fromCurrencyId(mockRUSD as any).decimal).toEqual(18);
  });

  test('toChainData should work', () => {
    expect(t1.toChainData()).toEqual({ Token: 'T1' });
  });

  test('isEqual should work', () => {
    const t2 = t1.clone();
    const t3 = new Token({ name: 'T3', symbol: 'T3', chain: 'maldives' });

    expect(t1.isEqual(t2)).toEqual(true);
    expect(t1.isEqual(t3)).toEqual(false);
  });

  test('toString should work', () => {
    expect(t1.toString()).toEqual('Token1');
  });

  test('sort tokens should work', () => {
    const reef = new Token({ name: 'REEF', symbol: 'REEF', chain: 'maldives', decimal: 18 });
    const rusd = new Token({ name: 'RUSD', symbol: 'RUSD', chain: 'maldives', decimal: 18 });

    expect(Token.sort(reef, rusd)).toEqual([reef, rusd]);
    expect(Token.sort(rusd, reef)).toEqual([reef, rusd]);
  });
});
