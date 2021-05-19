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
      start: 'BlockNumber',
    },
    LockDuration: {
      OneMonth: 0,
      OneYear: 1,
      TenYears: 2
    },
  }
};
