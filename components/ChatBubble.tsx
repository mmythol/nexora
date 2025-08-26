import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../themes/colours';

export default function ChatBubble({ role, text }: { role: 'user'|'assistant'; text: string }) {
  const isUser = role === 'user';
  return (
    <View style={{
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      backgroundColor: isUser ? colors.accent : colors.card,
      padding: 12,
      borderRadius: 14,
      marginVertical: 6,
      maxWidth: '85%'
    }}>
      <Text style={{ color: isUser ? '#0B0E11' : colors.text }}>{text}</Text>
    </View>
  );
}
