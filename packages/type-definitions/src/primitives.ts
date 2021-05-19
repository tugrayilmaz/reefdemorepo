export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    AuctionId: 'u32',
    AuctionIdOf: 'AuctionId',
    Share: 'u128',
    TokenSymbol: {
      _enum: {
        REEF: 0,
        RUSD: 1
      }
    },
    CurrencyId: {
      _enum: {
        Token: 'TokenSymbol',
        DEXShare: '(TokenSymbol, TokenSymbol)',
        ERC20: 'EvmAddress'
      }
    },
    CurrencyIdOf: 'CurrencyId',
    AuthoritysOriginId: {
        "_enum": [
            "Root"
        ]
    },
    TradingPair: '(CurrencyId,  CurrencyId)',
  }
};
