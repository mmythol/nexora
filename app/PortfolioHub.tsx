import React from 'react';
import { FlatList, RefreshControl, ScrollView, Text, View } from 'react-native';
import AllocationDonut from '../components/AllocationDonut';
import AssetCard from '../components/AssetCard';
import { getPortfolioSnapshot } from '../services/api';
import { colors } from '../themes/colours';
import { PortfolioSnapshot, Position } from '../types/models';

export default function PortfolioHub() {
  const [snap, setSnap] = React.useState<PortfolioSnapshot | null>(null);
  const [loading, setLoading] = React.useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const s = await getPortfolioSnapshot();
      setSnap(s);
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
      <Text style={{ color: colors.text, fontSize: 20, fontWeight: '700' }}>Net Worth</Text>
      <Text style={{ color: colors.accent, fontSize: 28, fontWeight: '800', marginTop: 6 }}>
        {snap ? `${snap.baseCcy} ${snap.netWorth.toLocaleString()}` : '—'}
      </Text>
      {snap && (
        <Text style={{ color: colors.muted, marginTop: 4 }}>
          Day: {snap.deltaDay! >= 0 ? '+' : ''}{snap.deltaDay?.toFixed(2)}% · YTD: {snap.deltaYtd! >= 0 ? '+' : ''}{snap.deltaYtd?.toFixed(2)}%
        </Text>
      )}

      <View style={{ height: 12 }} />
      {snap && <AllocationDonut data={snap.allocation} />}

      <Text style={{ color: colors.text, fontSize: 18, fontWeight: '700', marginTop: 8 }}>Positions</Text>
      <FlatList
        data={snap?.positions ?? []}
        keyExtractor={(item: Position) => item.id}
        renderItem={({ item }) => <AssetCard p={item} />}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 60 }}
      />
    </ScrollView>
  );
}
