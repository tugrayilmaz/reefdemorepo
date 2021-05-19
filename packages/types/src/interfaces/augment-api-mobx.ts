// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Data, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { Votes } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ActiveEraInfo, ElectionResult, ElectionScore, ElectionStatus, EraIndex, EraRewardPoints, Exposure, Forcing, Nominations, RewardDestination, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { CodeInfo, EvmAddress } from '@reef-defi/types/interfaces/evm';
import type { CommitmentOf, Era } from '@reef-defi/types/interfaces/poc';
import type { CurrencyId } from '@reef-defi/types/interfaces/primitives';
import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, H256, Hash, KeyTypeId, Moment, Perbill, Releases, Slot, ValidatorId } from '@reef-defi/types/interfaces/runtime';
import type { BaseStorageType, StorageDoubleMap, StorageMap } from '@open-web3/api-mobx';

export interface StorageType extends BaseStorageType {
  authorship: {    /**
     * Author of current block.
     **/
    author: Option<AccountId> | null;
    /**
     * Whether uncles were already set in this block.
     **/
    didSetUncles: bool | null;
    /**
     * Uncles
     **/
    uncles: Vec<UncleEntryItem> | null;
  };
  babe: {    /**
     * Current epoch authorities.
     **/
    authorities: Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>> | null;
    /**
     * Temporary value (cleared at block finalization) that includes the VRF output generated
     * at this block. This field should always be populated during block processing unless
     * secondary plain slots are enabled (which don't contain a VRF output).
     **/
    authorVrfRandomness: MaybeRandomness | null;
    /**
     * Current slot number.
     **/
    currentSlot: Slot | null;
    /**
     * Current epoch index.
     **/
    epochIndex: u64 | null;
    /**
     * The slot at which the first epoch actually started. This is 0
     * until the first block of the chain.
     **/
    genesisSlot: Slot | null;
    /**
     * Temporary value (cleared at block finalization) which is `Some`
     * if per-block initialization has already been called for current block.
     **/
    initialized: Option<MaybeRandomness> | null;
    /**
     * How late the current block is compared to its parent.
     * 
     * This entry is populated as part of block execution and is cleaned up
     * on block finalization. Querying this storage entry outside of block
     * execution context should always yield zero.
     **/
    lateness: BlockNumber | null;
    /**
     * Next epoch authorities.
     **/
    nextAuthorities: Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>> | null;
    /**
     * Next epoch configuration, if changed.
     **/
    nextEpochConfig: Option<NextConfigDescriptor> | null;
    /**
     * Next epoch randomness.
     **/
    nextRandomness: Randomness | null;
    /**
     * The epoch randomness for the *current* epoch.
     * 
     * # Security
     * 
     * This MUST NOT be used for gambling, as it can be influenced by a
     * malicious validator in the short term. It MAY be used in many
     * cryptographic protocols, however, so long as one remembers that this
     * (like everything else on-chain) it is public. For example, it can be
     * used where a number is needed that cannot have been chosen by an
     * adversary, for purposes such as public-coin zero-knowledge proofs.
     **/
    randomness: Randomness | null;
    /**
     * Randomness under construction.
     * 
     * We make a tradeoff between storage accesses and list length.
     * We store the under-construction randomness in segments of up to
     * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     * Once a segment reaches this length, we begin the next one.
     * We reset all segments and return to `0` at the beginning of every
     * epoch.
     **/
    segmentIndex: u32 | null;
    /**
     * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     **/
    underConstruction: StorageMap<u32 | AnyNumber, Vec<Randomness>>;
  };
  balances: {    /**
     * The balance of an account.
     * 
     * NOTE: This is only used in the case that this pallet is used to store balances.
     **/
    account: StorageMap<AccountId | string, AccountData>;
    /**
     * Any liquidity locks on some account balances.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: StorageMap<AccountId | string, Vec<BalanceLock>>;
    /**
     * Storage version of the pallet.
     * 
     * This is set to v2.0.0 for new networks.
     **/
    storageVersion: Releases | null;
    /**
     * The total units issued in the system.
     **/
    totalIssuance: Balance | null;
  };
  evm: {    /**
     * Accounts info.
     **/
    accounts: StorageMap<EvmAddress | string, Option<AccountInfo>>;
    accountStorages: StorageDoubleMap<EvmAddress | string, H256 | string, H256>;
    codeInfos: StorageMap<H256 | string, Option<CodeInfo>>;
    codes: StorageMap<H256 | string, Bytes>;
    /**
     * Extrinsics origin for the current tx.
     **/
    extrinsicOrigin: Option<AccountId> | null;
    /**
     * Next available system contract address.
     **/
    networkContractIndex: u64 | null;
  };
  evmAccounts: {    accounts: StorageMap<EvmAddress | string, Option<AccountId>>;
    evmAddresses: StorageMap<AccountId | string, Option<EvmAddress>>;
  };
  grandpa: {    /**
     * The number of changes (both in terms of keys and underlying economic responsibilities)
     * in the "set" of Grandpa validators from genesis.
     **/
    currentSetId: SetId | null;
    /**
     * next block number where we can force a change.
     **/
    nextForced: Option<BlockNumber> | null;
    /**
     * Pending change: (signaled at, scheduled change).
     **/
    pendingChange: Option<StoredPendingChange> | null;
    /**
     * A mapping from grandpa set ID to the index of the *most recent* session for which its
     * members were responsible.
     * 
     * TWOX-NOTE: `SetId` is not under user control.
     **/
    setIdSession: StorageMap<SetId | AnyNumber, Option<SessionIndex>>;
    /**
     * `true` if we are currently stalled.
     **/
    stalled: Option<ITuple<[BlockNumber, BlockNumber]>> | null;
    /**
     * State of the current authority set.
     **/
    state: StoredState | null;
  };
  identity: {    /**
     * Information that is pertinent to identify the entity behind an account.
     * 
     * TWOX-NOTE: OK ― `AccountId` is a secure hash.
     **/
    identityOf: StorageMap<AccountId | string, Option<Registration>>;
    /**
     * The set of registrars. Not expected to get very big as can only be added through a
     * special origin (likely a council motion).
     * 
     * The index into this can be cast to `RegistrarIndex` to get a valid value.
     **/
    registrars: Vec<Option<RegistrarInfo>> | null;
    /**
     * Alternative "sub" identities of this account.
     * 
     * The first item is the deposit, the second is a vector of the accounts.
     * 
     * TWOX-NOTE: OK ― `AccountId` is a secure hash.
     **/
    subsOf: StorageMap<AccountId | string, ITuple<[BalanceOf, Vec<AccountId>]>>;
    /**
     * The super-identity of an alternative "sub" identity together with its name, within that
     * context. If the account is not some other account's sub-identity, then just `None`.
     **/
    superOf: StorageMap<AccountId | string, Option<ITuple<[AccountId, Data]>>>;
  };
  imOnline: {    /**
     * For each session index, we keep a mapping of `ValidatorId<T>` to the
     * number of blocks authored by the given authority.
     **/
    authoredBlocks: StorageDoubleMap<SessionIndex | AnyNumber, ValidatorId | string, u32>;
    /**
     * The block number after which it's ok to send heartbeats in current session.
     * 
     * At the beginning of each session we set this to a value that should
     * fall roughly in the middle of the session duration.
     * The idea is to first wait for the validators to produce a block
     * in the current session, so that the heartbeat later on will not be necessary.
     **/
    heartbeatAfter: BlockNumber | null;
    /**
     * The current set of keys that may issue a heartbeat.
     **/
    keys: Vec<AuthorityId> | null;
    /**
     * For each session index, we keep a mapping of `AuthIndex` to
     * `offchain::OpaqueNetworkState`.
     **/
    receivedHeartbeats: StorageDoubleMap<SessionIndex | AnyNumber, AuthIndex | AnyNumber, Option<Bytes>>;
  };
  indices: {    /**
     * The lookup from index to account.
     **/
    accounts: StorageMap<AccountIndex | AnyNumber, Option<ITuple<[AccountId, BalanceOf, bool]>>>;
  };
  offences: {    /**
     * A vector of reports of the same kind that happened at the same time slot.
     **/
    concurrentReportsIndex: StorageDoubleMap<Kind | string, OpaqueTimeSlot | string, Vec<ReportIdOf>>;
    /**
     * Deferred reports that have been rejected by the offence handler and need to be submitted
     * at a later time.
     **/
    deferredOffences: Vec<DeferredOffenceOf> | null;
    /**
     * The primary structure that holds all offence records keyed by report identifiers.
     **/
    reports: StorageMap<ReportIdOf | string, Option<OffenceDetails>>;
    /**
     * Enumerates all reports of a kind along with the time they happened.
     * 
     * All reports are sorted by the time of offence.
     * 
     * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     * different types are not supported at the moment so we are doing the manual serialization.
     **/
    reportsByKindIndex: StorageMap<Kind | string, Bytes>;
  };
  poc: {    candidates: StorageMap<AccountId | string, BalanceOf>;
    candidatesCount: u32 | null;
    commitments: StorageMap<AccountId | string, CommitmentOf>;
    currentEra: Era | null;
    lockedAmount: BalanceOf | null;
    members: Vec<AccountId> | null;
    voterRewards: StorageDoubleMap<EraIndex | AnyNumber, AccountId | string, BalanceOf>;
  };
  randomnessCollectiveFlip: {    /**
     * Series of block headers from the last 81 blocks that acts as random seed material. This
     * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     * the oldest hash.
     **/
    randomMaterial: Vec<Hash> | null;
  };
  scheduler: {    /**
     * Items to be executed, indexed by the block number that they should be executed on.
     **/
    agenda: StorageMap<BlockNumber | AnyNumber, Vec<Option<Scheduled>>>;
    /**
     * Lookup from identity to the block number and index of the task.
     **/
    lookup: StorageMap<Bytes | string, Option<TaskAddress>>;
    /**
     * Storage version of the pallet.
     * 
     * New networks start with last version.
     **/
    storageVersion: Releases | null;
  };
  session: {    /**
     * Current index of the session.
     **/
    currentIndex: SessionIndex | null;
    /**
     * Indices of disabled validators.
     * 
     * The set is cleared when `on_session_ending` returns a new set of identities.
     **/
    disabledValidators: Vec<u32> | null;
    /**
     * The owner of a key. The key is the `KeyTypeId` + the encoded key.
     **/
    keyOwner: StorageMap<ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber, Bytes | string], Option<ValidatorId>>;
    /**
     * The next session keys for a validator.
     **/
    nextKeys: StorageMap<ValidatorId | string, Option<Keys>>;
    /**
     * True if the underlying economic identities or weighting behind the validators
     * has changed in the queued validator set.
     **/
    queuedChanged: bool | null;
    /**
     * The queued keys for the next session. When the next session begins, these keys
     * will be used to determine the validator's session keys.
     **/
    queuedKeys: Vec<ITuple<[ValidatorId, Keys]>> | null;
    /**
     * The current set of validators.
     **/
    validators: Vec<ValidatorId> | null;
  };
  staking: {    /**
     * The active era information, it holds index and start.
     * 
     * The active era is the era being currently rewarded. Validator set of this era must be
     * equal to [`SessionInterface::validators`].
     **/
    activeEra: Option<ActiveEraInfo> | null;
    /**
     * Map from all locked "stash" accounts to the controller account.
     **/
    bonded: StorageMap<AccountId | string, Option<AccountId>>;
    /**
     * A mapping from still-bonded eras to the first session index of that era.
     * 
     * Must contains information for eras for the range:
     * `[active_era - bounding_duration; active_era]`
     **/
    bondedEras: Vec<ITuple<[EraIndex, SessionIndex]>> | null;
    /**
     * The amount of currency given to reporters of a slash event which was
     * canceled by extraordinary circumstances (e.g. governance).
     **/
    canceledSlashPayout: BalanceOf | null;
    /**
     * The current era index.
     * 
     * This is the latest planned era, depending on how the Session pallet queues the validator
     * set, it might be active or not.
     **/
    currentEra: Option<EraIndex> | null;
    /**
     * The earliest era for which we have a pending, unapplied slash.
     **/
    earliestUnappliedSlash: Option<EraIndex> | null;
    /**
     * Flag to control the execution of the offchain election. When `Open(_)`, we accept
     * solutions to be submitted.
     **/
    eraElectionStatus: ElectionStatus | null;
    /**
     * Rewards for the last `HISTORY_DEPTH` eras.
     * If reward hasn't been set or has been removed then 0 reward is returned.
     **/
    erasRewardPoints: StorageMap<EraIndex | AnyNumber, EraRewardPoints>;
    /**
     * Exposure of validator at era.
     * 
     * This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     * Is it removed after `HISTORY_DEPTH` eras.
     * If stakers hasn't been set or has been removed then empty exposure is returned.
     **/
    erasStakers: StorageDoubleMap<EraIndex | AnyNumber, AccountId | string, Exposure>;
    /**
     * Clipped Exposure of validator at era.
     * 
     * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     * `T::MaxNominatorRewardedPerValidator` biggest stakers.
     * (Note: the field `total` and `own` of the exposure remains unchanged).
     * This is used to limit the i/o cost for the nominator payout.
     * 
     * This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     * Is it removed after `HISTORY_DEPTH` eras.
     * If stakers hasn't been set or has been removed then empty exposure is returned.
     **/
    erasStakersClipped: StorageDoubleMap<EraIndex | AnyNumber, AccountId | string, Exposure>;
    /**
     * The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     * Note: This tracks the starting session (i.e. session index when era start being active)
     * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     **/
    erasStartSessionIndex: StorageMap<EraIndex | AnyNumber, Option<SessionIndex>>;
    /**
     * The total amount staked for the last `HISTORY_DEPTH` eras.
     * If total hasn't been set or has been removed then 0 stake is returned.
     **/
    erasTotalStake: StorageMap<EraIndex | AnyNumber, BalanceOf>;
    /**
     * Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     * This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     * Is it removed after `HISTORY_DEPTH` eras.
     **/
    erasValidatorPrefs: StorageDoubleMap<EraIndex | AnyNumber, AccountId | string, ValidatorPrefs>;
    /**
     * The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     * Eras that haven't finished yet or has been removed doesn't have reward.
     **/
    erasValidatorReward: StorageMap<EraIndex | AnyNumber, Option<BalanceOf>>;
    /**
     * Mode of era forcing.
     **/
    forceEra: Forcing | null;
    /**
     * Number of eras to keep in history.
     * 
     * Information is kept for eras in `[current_era - history_depth; current_era]`.
     * 
     * Must be more than the number of eras delayed by session otherwise. I.e. active era must
     * always be in history. I.e. `active_era > current_era - history_depth` must be
     * guaranteed.
     **/
    historyDepth: u32 | null;
    /**
     * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     * easy to initialize and the performance hit is minimal (we expect no more than four
     * invulnerables) and restricted to testnets.
     **/
    invulnerables: Vec<AccountId> | null;
    /**
     * True if the current **planned** session is final. Note that this does not take era
     * forcing into account.
     **/
    isCurrentSessionFinal: bool | null;
    /**
     * Map from all (unlocked) "controller" accounts to the info regarding the staking.
     **/
    ledger: StorageMap<AccountId | string, Option<StakingLedger>>;
    /**
     * Minimum number of staking participants before emergency conditions are imposed.
     **/
    minimumValidatorCount: u32 | null;
    /**
     * The map from nominator stash key to the set of stash keys of all validators to nominate.
     **/
    nominators: StorageMap<AccountId | string, Option<Nominations>>;
    /**
     * All slashing events on nominators, mapped by era to the highest slash value of the era.
     **/
    nominatorSlashInEra: StorageDoubleMap<EraIndex | AnyNumber, AccountId | string, Option<BalanceOf>>;
    /**
     * Where the reward payment should be made. Keyed by stash.
     **/
    payee: StorageMap<AccountId | string, RewardDestination>;
    /**
     * The next validator set. At the end of an era, if this is available (potentially from the
     * result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     * is executed.
     **/
    queuedElected: Option<ElectionResult> | null;
    /**
     * The score of the current [`QueuedElected`].
     **/
    queuedScore: Option<ElectionScore> | null;
    /**
     * Slashing spans for stash accounts.
     **/
    slashingSpans: StorageMap<AccountId | string, Option<SlashingSpans>>;
    /**
     * The percentage of the slash that is distributed to reporters.
     * 
     * The rest of the slashed value is handled by the `Slash`.
     **/
    slashRewardFraction: Perbill | null;
    /**
     * Snapshot of nominators at the beginning of the current election window. This should only
     * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     **/
    snapshotNominators: Option<Vec<AccountId>> | null;
    /**
     * Snapshot of validators at the beginning of the current election window. This should only
     * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     **/
    snapshotValidators: Option<Vec<AccountId>> | null;
    /**
     * Records information about the maximum slash of a stash within a slashing span,
     * as well as how much reward has been paid out.
     **/
    spanSlash: StorageMap<ITuple<[AccountId, SpanIndex]> | [AccountId | string, SpanIndex | AnyNumber], SpanRecord>;
    /**
     * True if network has been upgraded to this version.
     * Storage version of the pallet.
     * 
     * This is set to v5.0.0 for new networks.
     **/
    storageVersion: Releases | null;
    /**
     * All unapplied slashes that are queued for later.
     **/
    unappliedSlashes: StorageMap<EraIndex | AnyNumber, Vec<UnappliedSlash>>;
    /**
     * The ideal number of staking participants.
     **/
    validatorCount: u32 | null;
    /**
     * The map from (wannabe) validator stash key to the preferences of that validator.
     **/
    validators: StorageMap<AccountId | string, ValidatorPrefs>;
    /**
     * All slashing events on validators, mapped by era to the highest slash proportion
     * and slash value of the era.
     **/
    validatorSlashInEra: StorageDoubleMap<EraIndex | AnyNumber, AccountId | string, Option<ITuple<[Perbill, BalanceOf]>>>;
  };
  sudo: {    /**
     * The `AccountId` of the sudo key.
     **/
    key: AccountId | null;
  };
  system: {    /**
     * The full account information for a particular account ID.
     **/
    account: StorageMap<AccountId | string, AccountInfo>;
    /**
     * Total length (in bytes) for all extrinsics put together, for the current block.
     **/
    allExtrinsicsLen: Option<u32> | null;
    /**
     * Map of block numbers to block hashes.
     **/
    blockHash: StorageMap<BlockNumber | AnyNumber, Hash>;
    /**
     * The current weight for the block.
     **/
    blockWeight: ConsumedWeight | null;
    /**
     * Digest of the current block, also part of the block header.
     **/
    digest: DigestOf | null;
    /**
     * The number of events in the `Events<T>` list.
     **/
    eventCount: EventIndex | null;
    /**
     * Events deposited for the current block.
     **/
    events: Vec<EventRecord> | null;
    /**
     * Mapping between a topic (represented by T::Hash) and a vector of indexes
     * of events in the `<Events<T>>` list.
     * 
     * All topic vectors have deterministic storage locations depending on the topic. This
     * allows light-clients to leverage the changes trie storage tracking mechanism and
     * in case of changes fetch the list of events of interest.
     * 
     * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     * the `EventIndex` then in case if the topic has the same contents on the next block
     * no notification will be triggered thus the event might be lost.
     **/
    eventTopics: StorageMap<Hash | string, Vec<ITuple<[BlockNumber, EventIndex]>>>;
    /**
     * The execution phase of the block.
     **/
    executionPhase: Option<Phase> | null;
    /**
     * Total extrinsics count for the current block.
     **/
    extrinsicCount: Option<u32> | null;
    /**
     * Extrinsics data for the current block (maps an extrinsic's index to its data).
     **/
    extrinsicData: StorageMap<u32 | AnyNumber, Bytes>;
    /**
     * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     **/
    lastRuntimeUpgrade: Option<LastRuntimeUpgradeInfo> | null;
    /**
     * The current block number being processed. Set by `execute_block`.
     **/
    number: BlockNumber | null;
    /**
     * Hash of the previous block.
     **/
    parentHash: Hash | null;
    /**
     * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     * (default) if not.
     **/
    upgradedToDualRefCount: bool | null;
    /**
     * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     **/
    upgradedToU32RefCount: bool | null;
  };
  techCouncil: {    /**
     * The current members of the collective. This is stored sorted (just by value).
     **/
    members: Vec<AccountId> | null;
    /**
     * The prime member that helps determine the default vote behavior in case of absentations.
     **/
    prime: Option<AccountId> | null;
    /**
     * Proposals so far.
     **/
    proposalCount: u32 | null;
    /**
     * Actual proposal for a given hash, if it's current.
     **/
    proposalOf: StorageMap<Hash | string, Option<Proposal>>;
    /**
     * The hashes of the active proposals.
     **/
    proposals: Vec<Hash> | null;
    /**
     * Votes on a given proposal, if it is ongoing.
     **/
    voting: StorageMap<Hash | string, Option<Votes>>;
  };
  timestamp: {    /**
     * Did the timestamp get updated in this block?
     **/
    didUpdate: bool | null;
    /**
     * Current time for the current block.
     **/
    now: Moment | null;
  };
  tokens: {    /**
     * The balance of a token type under an account.
     * 
     * NOTE: If the total is ever zero, decrease account ref account.
     * 
     * NOTE: This is only used in the case that this module is used to store
     * balances.
     **/
    accounts: StorageDoubleMap<AccountId | string, CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | string, AccountData>;
    /**
     * Any liquidity locks of a token type under an account.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: StorageDoubleMap<AccountId | string, CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | string, Vec<BalanceLock>>;
    /**
     * The total issuance of a token type.
     **/
    totalIssuance: StorageMap<CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | string, Balance>;
  };
  transactionPayment: {    defaultFeeCurrencyId: StorageMap<AccountId | string, Option<CurrencyId>>;
    nextFeeMultiplier: Multiplier | null;
  };
}
