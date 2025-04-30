import React, { useState } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import mockChats from '../../data/mockChats';
import mockMessages from '../../data/mockMessages';
import DirectHeader from '../components/chat/direct/DirectHeader'; 
import DirectMessages from '../components/chat/direct/DirectMessages';
import DirectInput from '../components/chat/direct/DirectInput'; 

export default function DirectScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { userId } = route.params || {};

  const user = mockChats.find(u => u.id === Number(userId));
  const [messages, setMessages] = useState(mockMessages[userId] || []);
  const [text, setText] = useState('');

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
    setMessages([newMessage, ...messages]);
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <DirectHeader
        user={user}
        onBackPress={() => navigation.goBack()}
        onAvatarPress={() =>
          navigation.navigate('Profile', {
            screen: 'UserPublicProfile',
            params: { userId: Number(userId) },
          })
        }
      />

      <DirectMessages messages={messages} />

      <DirectInput text={text} setText={setText} onSend={handleSend} />
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
});
