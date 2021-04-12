import {
  typesBundle as reefTypesBundle,
  types as reefTypes,
  typesAlias as reefTypeAlias,
  rpc as reefRpc,
  signedExtensions as reefSignedExtensions
} from '@reef-defi/type-definitions';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

export * from './interfaces/augment-api-mobx';

export const types: RegistryTypes = reefTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = reefRpc;

export const typesAlias: Record<string, OverrideModuleType> = reefTypeAlias;

export const typesBundle = (reefTypesBundle as unknown) as OverrideBundleType;

export const signedExtensions = reefSignedExtensions;
