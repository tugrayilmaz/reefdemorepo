import { derive as ormlDerives } from '@open-web3/orml-api-derive';
import { derive as reefDerives } from '@reef-defi/api-derive';
import {
  rpc as reefRpc,
  types as reefTypes,
  typesAlias as reefTypesAlias,
  typesBundle as reefTypesBundle,
  signedExtensions as reefSignedExtensions
} from '@reef-defi/types';
import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  types: reefTypes,
  rpc: reefRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  signedExtensions,
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...reefTypes,
    ...types
  },
  rpc: {
    ...reefRpc,
    ...rpc
  },
  typesAlias: {
    ...reefTypesAlias,
    ...typesAlias
  },
  derives: {
    ...ormlDerives,
    ...reefDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      reef: {
        ...reefTypesBundle?.spec?.reef,
        ...typesBundle?.spec?.reef
      },
      mandala: {
        ...reefTypesBundle?.spec?.mandala,
        ...typesBundle?.spec?.mandala
      }
    }
  },
  signedExtensions: {
    ...reefSignedExtensions,
    ...signedExtensions
  },
  ...otherOptions
});
