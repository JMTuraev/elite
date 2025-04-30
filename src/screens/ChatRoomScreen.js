import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ChatRoomScreen() {
  const route = useRoute();
  const { userId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chat with User #{userId}</Text>

      {/* 🔜 Bu yerga quyidagilar ketma-ket joylanadi:
          - ChatRoomHeader (foydalanuvchi info)
          - ChatMessages (FlatList)
          - ChatInput (input + send)
      */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 12,
  },
});
