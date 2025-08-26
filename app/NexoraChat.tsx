import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import { nexoraAsk } from '../services/api';
import { colors } from '../themes/colours';

type Msg = { id: string; role: 'user'|'assistant'; text: string };

export default function NexoraChat() {
  const [input, setInput] = React.useState('');
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { id: 'm0', role: 'assistant', text: 'Hi, I’m Nexora. Ask me about your portfolio or today’s risks.' }
  ]);
  const [busy, setBusy] = React.useState(false);

  const send = async () => {
    if (!input.trim() || busy) return;
    const userMsg: Msg = { id: String(Math.random()), role: 'user', text: input.trim() };
    setMsgs(prev => [...prev, userMsg]);
    setInput('');
    setBusy(true);
    try {
      const reply = await nexoraAsk(userMsg.text);
      setMsgs(prev => [...prev, { id: String(Math.random()), role: 'assistant', text: reply }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {msgs.map(m => <ChatBubble key={m.id} role={m.role} text={m.text} />)}
      </ScrollView>
      <View style={{ padding: 12, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.card, flexDirection: 'row', gap: 8 }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="e.g., Explain today’s drawdown"
          placeholderTextColor={colors.muted}
          style={{ flex: 1, color: colors.text, padding: 12, borderWidth: 1, borderColor: colors.border, borderRadius: 12 }}
        />
        <TouchableOpacity onPress={send} disabled={busy} style={{ backgroundColor: colors.primary, paddingHorizontal: 16, justifyContent: 'center', borderRadius: 12 }}>
          <Text style={{ color: '#0B0E11', fontWeight: '700' }}>{busy ? '...' : 'Send'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
