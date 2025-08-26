import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../themes/colours';
import { Position } from '../types/models';

export default function AssetCard({ p }: { p: Position }) {
  return (
    <View style={{
      backgroundColor: colors.card,
      borderColor: colors.border,
      borderWidth: 1,
      padding: 12,
      borderRadius: 12,
      marginBottom: 10
    }}>
      <Text style={{ color: colors.text, fontWeight: '600', fontSize: 16 }}>
        {p.symbol ? `${p.symbol} • ` : ''}{p.name}
      </Text>
      <Text style={{ color: colors.muted, marginTop: 4 }}>
        {p.assetClass} • {p.currency} {p.value.toLocaleString()}
      </Text>
      {typeof p.pnl === 'number' && (
        <Text style={{ color: (p.pnl >= 0 ? colors.success : colors.danger), marginTop: 4 }}>
          P&L: {p.pnl >= 0 ? '+' : ''}{p.pnl.toFixed(2)}%
        </Text>
      )}
      {p.riskFlags?.length ? (
        <Text style={{ color: colors.warning, marginTop: 4 }}>
          Risk: {p.riskFlags.join(', ')}
        </Text>
      ) : null}
    </View>
  );
}
