import { PortfolioSnapshot, RiskScan } from '../types/models';

// Mocked portfolio snapshot
export async function getPortfolioSnapshot(): Promise<PortfolioSnapshot> {
  return {
    asOf: new Date().toISOString(),
    baseCcy: 'USD',
    netWorth: 5250000,
    deltaDay: -0.4,
    deltaYtd: 7.8,
    allocation: {
      Equity: 48, FixedIncome: 22, RealEstate: 15, Alternative: 10, Crypto: 5
    },
    positions: [
      { id: '1', symbol: 'AAPL', name: 'Apple Inc.', assetClass: 'Equity', quantity: 420, value: 1000000, pnl: 12.3, currency: 'USD', riskFlags: [] },
      { id: '2', symbol: 'UST 10Y', name: 'UST 10Y Bond', assetClass: 'FixedIncome', quantity: 500000, value: 500000, pnl: -1.2, currency: 'USD' },
      { id: '3', name: 'CapitaSpring (REIT exp.)', assetClass: 'RealEstate', quantity: 1, value: 750000, currency: 'SGD', riskFlags: ['Leasing'] },
      { id: '4', symbol: 'BTC', name: 'Bitcoin', assetClass: 'Crypto', quantity: 10, value: 650000, pnl: 45.0, currency: 'USD', riskFlags: ['Volatility'] }
    ]
  };
}

// Mocked risk scan
export async function getRiskScan(): Promise<RiskScan> {
  return {
    asOf: new Date().toISOString(),
    score: 62,
    delta7d: +5,
    events: [
      {
        id: 'ev1',
        ts: new Date().toISOString(),
        topic: 'Geopolitics',
        severity: 3,
        region: 'Middle East',
        summary: 'Escalation risk impacting oil supply expectations.',
        affectedSymbols: ['XOM', 'CL=F']
      },
      {
        id: 'ev2',
        ts: new Date().toISOString(),
        topic: 'Crypto',
        severity: 2,
        summary: 'Major exchange outage causing short-term liquidity stress.',
        affectedSymbols: ['BTC', 'ETH']
      }
    ],
    personalizedImpact: [
      { symbol: 'BTC', impact: 'med', note: 'Elevated exchange latency may widen spreads.' },
      { symbol: 'AAPL', impact: 'low', note: 'Limited direct exposure; watch USD strength.' }
    ]
  };
}

// Stubbed chatbot call — replace with your server/LLM proxy
export async function nexoraAsk(prompt: string): Promise<string> {
  return `Nexora (stub): You asked — "${prompt}". I can analyze portfolio/risk and propose a coarse rebalance when connected.`;
}
