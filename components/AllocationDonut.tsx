import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../themes/colours';

// Simple placeholder instead of a full SVG donut for now
export default function AllocationDonut({ data }: { data: Record<string, number> }) {
  const total = Object.values(data).reduce((a, b) => a + b, 0);
  return (
    <View style={{
      backgroundColor: colors.card,
      borderColor: colors.border,
      borderWidth: 1,
      padding: 16,
      borderRadius: 16,
      marginBottom: 12
    }}>
      <Text style={{ color: colors.text, fontWeight: '600', marginBottom: 8 }}>
        Allocation (placeholder)
      </Text>
      {Object.entries(data).map(([k, v]) => (
        <Text key={k} style={{ color: colors.muted }}>
          {k}: {v}% {total !== 100 ? '(scaled)' : ''}
        </Text>
      ))}
    </View>
  );
}
