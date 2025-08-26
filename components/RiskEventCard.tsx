import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../themes/colours';
import { RiskEvent } from '../types/models';

const sevColor = (s: 1|2|3) => s === 3 ? colors.danger : s === 2 ? colors.warning : colors.muted;

export default function RiskEventCard({ ev }: { ev: RiskEvent }) {
  return (
    <View style={{
      backgroundColor: colors.card,
      borderColor: sevColor(ev.severity),
      borderLeftWidth: 4,
      borderRadius: 12,
      padding: 12,
      marginBottom: 10
    }}>
      <Text style={{ color: colors.text, fontWeight: '600' }}>
        {ev.topic} {ev.region ? `• ${ev.region}` : ''}
      </Text>
      <Text style={{ color: colors.muted, marginTop: 4 }}>{new Date(ev.ts).toLocaleString()}</Text>
      <Text style={{ color: colors.text, marginTop: 8 }}>{ev.summary}</Text>
      {ev.affectedSymbols?.length ? (
        <Text style={{ color: colors.accent, marginTop: 6 }}>
          Affected: {ev.affectedSymbols.join(', ')}
        </Text>
      ) : null}
    </View>
  );
}
