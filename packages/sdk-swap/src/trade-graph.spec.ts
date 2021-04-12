import { Token, TokenPair } from '@reef-defi/sdk-core';
import { TradeGraph } from './trade-graph';

describe('trade graph', () => {
  const reef = new Token({ name: 'REEF', symbol: 'REEF', chain: 'reef', decimal: 18 });
  const ausd = new Token({ name: 'AUSD', symbol: 'AUSD', chain: 'reef', decimal: 16 });
  const dot = new Token({ name: 'DOT', symbol: 'DOT', chain: 'reef', decimal: 16 });
  const xbtc = new Token({ name: 'XBTC', symbol: 'XBTC', chain: 'reef', decimal: 16 });
  const renbtc = new Token({ name: 'RENBTC', symbol: 'RENBTC', chain: 'reef', decimal: 16 });

  test('create trade graph', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(reef, ausd),
      new TokenPair(reef, dot),
      new TokenPair(reef, xbtc),
      new TokenPair(reef, renbtc),
      new TokenPair(dot, renbtc)
    ]);

    expect(tradeGraph.getAdj(reef)).toEqual([ausd, dot, xbtc, renbtc]);
    expect(tradeGraph.getAdj(ausd)).toEqual([reef]);
    expect(tradeGraph.getAdj(renbtc)).toEqual([reef, dot]);
  });

  test('get path should be work', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(reef, ausd),
      new TokenPair(reef, dot),
      new TokenPair(reef, xbtc),
      new TokenPair(reef, renbtc),
      new TokenPair(dot, renbtc),
      new TokenPair(dot, ausd)
    ]);

    const _dot = new Token({ name: 'DOT', symbol: 'DOT', chain: 'reef', decimal: 16 });

    const dot2renbtc = tradeGraph.getPathes(_dot, renbtc);

    expect(dot2renbtc[0]).toEqual([_dot, reef, renbtc]);
    expect(dot2renbtc[1]).toEqual([_dot, renbtc]);
    expect(dot2renbtc[2]).toEqual([_dot, ausd, reef, renbtc]);

    const reef2ausd = tradeGraph.getPathes(reef, ausd);

    expect(reef2ausd[0]).toEqual([reef, ausd]);
    expect(reef2ausd[1]).toEqual([reef, dot, ausd]);
    expect(reef2ausd[2]).toEqual([reef, renbtc, dot, ausd]);
  });
});
