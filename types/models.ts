export type AssetClass = 'Equity'|'FixedIncome'|'RealEstate'|'Alternative'|'Crypto';

export interface Position {
  id: string;
  symbol?: string;
  name: string;
  assetClass: AssetClass;
  quantity: number;
  value: number;
  pnl?: number;
  currency: string;
  riskFlags?: string[];
}

export interface PortfolioSnapshot {
  asOf: string;
  baseCcy: string;
  netWorth: number;
  deltaDay?: number; // %
  deltaYtd?: number; // %
  allocation: Record<AssetClass, number>; // 0..100
  positions: Position[];
}

export interface RiskEvent {
  id: string;
  ts: string;
  topic: 'Geopolitics'|'Macro'|'Regulatory'|'Crypto';
  severity: 1|2|3; // 1=low,3=high
  region?: string;
  summary: string;
  affectedSymbols?: string[];
}

export interface RiskScan {
  asOf: string;
  score: number;
  delta7d?: number;
  events: RiskEvent[];
  personalizedImpact: Array<{ symbol: string; impact: 'low'|'med'|'high'; note: string }>;
}
