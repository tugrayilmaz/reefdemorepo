import { CHAIN } from './type';

interface TokenConfigData {
  chain: CHAIN;
  name: string;
  symbol: string;
  decimal: number;
}

const config: TokenConfigData[] = [
  {
    chain: 'maldives',
    name: 'REEF',
    symbol: 'REEF',
    decimal: 18
  },
  {
    chain: 'maldives',
    name: 'Reef Dollar',
    symbol: 'RUSD',
    decimal: 18
  }
];

class TokenConfig {
  readonly _config: TokenConfigData[];

  constructor(_config: TokenConfigData[] = config) {
    this._config = _config;
  }

  public getDecimal(token: string): number {
    const config = this.getConfig(token);

    if (!config) {
      console.warn(`can't find default decimal for ${token}, treat 18 as decimal`);

      return 18;
    }

    return config.decimal;
  }

  public getName(token: string): string {
    const config = this.getConfig(token);

    if (!config) {
      console.warn(`can't find default name for ${token}, treat ${token} as name`);

      return token;
    }

    return config.name;
  }

  public getChain(token: string): CHAIN {
    const config = this.getConfig(token);

    if (!config) {
      console.warn(`can't find default chain for ${token}, treat ${token} as unknown`);

      return 'unknown';
    }

    return config.chain;
  }

  private getConfig(token: string) {
    return this._config.find((item) => item.symbol === token);
  }
}

export const tokenConfig = new TokenConfig();
