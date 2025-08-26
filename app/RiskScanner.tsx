import React from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import RiskEventCard from '../components/RiskEventCard';
import { getRiskScan } from '../services/api';
import { colors } from '../themes/colours';
import { RiskScan } from '../types/models';

export default function RiskScanner() {
  const [scan, setScan] = React.useState<RiskScan | null>(null);
  const [loading, setLoading] = React.useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const s = await getRiskScan();
      setScan(s);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => { load(); }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg, padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={colors.text} />}
    >
      <Text style={{ color: colors.text, fontSize: 20, fontWeight: '700' }}>Global Risk</Text>
      <Text style={{ color: colors.muted, marginTop: 4 }}>
        Score: {scan?.score ?? '—'} ({scan?.delta7d && scan?.delta7d >= 0 ? '+' : ''}{scan?.delta7d ?? 0} vs 7d)
      </Text>

      <View style={{ height: 12 }} />
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: '700' }}>Events</Text>
      <View style={{ height: 8 }} />

      {scan?.events.map(e => <RiskEventCard key={e.id} ev={e} />)}

      <View style={{ height: 12 }} />
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: '700' }}>Your Exposures Affected</Text>
      {scan?.personalizedImpact.map(i => (
        <Text key={i.symbol} style={{ color: colors.muted, marginTop: 6 }}>
          {i.symbol}: {i.impact.toUpperCase()} — {i.note}
        </Text>
      ))}
    </ScrollView>
  );
}
