import React, { useState } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import mockChats from '../../data/mockChats';
import mockMessages from '../../data/mockMessages';
import DirectHeader from '../components/chat/direct/DirectHeader';
import DirectMessages from '../components/chat/direct/DirectMessages';
import DirectInput from '../components/chat/direct/DirectInput';
import StartChatOverlay from '../components/chat/direct/StartChatOverlay';
import WaitingOverlay from '../components/chat/direct/WaitingOverlay';
import IncomingRequestOverlay from '../components/chat/direct/IncomingRequestOverlay';

export default function DirectScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { userId, sourceTab } = route.params || {}; // 'in' or 'out'

  const user = mockChats.find(u => u.id === Number(userId));
  const [messages, setMessages] = useState(mockMessages[userId] || []);
  const [text, setText] = useState('');

  const isRequestedTab = sourceTab === 'in';
  const isStartedTab = sourceTab === 'out';

  const [chatRequested, setChatRequested] = useState(isRequestedTab); // B user bo‘lsa true
  const [chatStarted, setChatStarted] = useState(false);

  const [dialogCount, setDialogCount] = useState(0);
  const [lastSender, setLastSender] = useState(null); // 'me' yoki 'them'

  if (!userId || !user) {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  const handleSend = () => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages(prev => [newMessage, ...prev]);

    // Faqat agar oxirgi sender 'them' bo‘lsa, dialog +1
    if (lastSender === 'them') {
      setDialogCount(prev => (prev < 10 ? prev + 1 : 10));
    }

    setLastSender('me');
    setText('');
  };

  const handleReply = () => {
    const newReply = {
      id: Date.now(),
      text: 'Sure! 😉',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: false,
    };

    setMessages(prev => [newReply, ...prev]);

    if (lastSender === 'me') {
      setDialogCount(prev => (prev < 10 ? prev + 1 : 10));
    }

    setLastSender('them');
  };

  const handleChatRequest = () => {
    setChatRequested(true);
  };

  const handleChatAccept = () => {
    setChatStarted(true);
    setChatRequested(false);
  };

  const handleChatDecline = () => {
    setChatRequested(false);
  };

  const handleChatExpire = () => {
    setChatRequested(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DirectHeader
        user={user}
        onBackPress={() => navigation.goBack()}
        onAvatarPress={() =>
          navigation.navigate('Search', {
            screen: 'UserPublicProfile',
            params: { userId: Number(userId) },
          })
        }
        progressBadge={`${dialogCount}/10`}
      />

      <View style={styles.flex}>
        <DirectMessages messages={messages} />

        {/* A user – boshlab yuborgan */}
        {isStartedTab && !chatRequested && !chatStarted && (
          <StartChatOverlay onStart={handleChatRequest} />
        )}
        {isStartedTab && chatRequested && !chatStarted && (
          <WaitingOverlay
            onExpire={handleChatExpire}
            onAccept={handleChatAccept}
            onDecline={handleChatDecline}
          />
        )}

        {/* B user – so‘rovni qabul qiluvchi */}
        {isRequestedTab && chatRequested && !chatStarted && (
          <IncomingRequestOverlay
            onAccept={handleChatAccept}
            onDecline={handleChatDecline}
          />
        )}
      </View>

      <View style={{ padding: 10 }}>
        <Button
          title="📩 Simulate B user reply"
          onPress={handleReply}
          color="#888"
        />
      </View>

      <DirectInput
        text={text}
        setText={setText}
        onSend={handleSend}
        disabled={!chatStarted || dialogCount >= 10}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  flex: {
    flex: 1,
    position: 'relative',
  },
});
