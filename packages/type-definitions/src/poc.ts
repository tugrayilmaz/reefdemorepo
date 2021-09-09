export default {
  rpc: {},
  types: {
    CommitmentOf: {
      duration: 'LockDuration',
      amount: 'BalanceOf',
      candidate: 'AccountId'
    },
    Era: {
      index: 'u32',
      start: 'BlockNumber'
    },
    LockDuration: {
      _enum: ['OneMonth', 'OneYear', 'TenYears']
    }
  }
};
