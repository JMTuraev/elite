import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function StartChatOverlay({ onStart }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="lock-closed-outline" size={36} color="#FFD700" style={styles.icon} />

        <Text style={styles.title}>Start Private Chat</Text>

        <Text style={styles.subtext}>
          Both users must agree to chat. Each dialog costs <Text style={styles.gold}>$12</Text>. Dialog = You write + they reply.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onStart}>
          <Text style={styles.buttonText}>Start Chat ($12)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
  card: {
    width: '85%',
    backgroundColor: '#1e1e1e',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
  },
  subtext: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  gold: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
