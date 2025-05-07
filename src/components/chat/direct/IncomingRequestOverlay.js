import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IncomingRequestOverlay({ onAccept, onDecline, duration = 15 * 60 }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onDecline(); // avtomatik rad etiladi
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Ionicons name="flame-outline" size={32} color="#B794F4" />
        </View>

        <Text style={styles.text}>
          Someone felt a spark ✨{'\n'}
          <Text style={styles.bold}>10 dialogs for $12</Text> — to get closer to you.
        </Text>

        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.acceptText}>✅ Accept & Start Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.declineBtn} onPress={onDecline}>
          <Text style={styles.declineText}>❌ Decline Invitation</Text>
        </TouchableOpacity>

        <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '25%',
    width: '100%',
    alignItems: 'center',
    zIndex: 30,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 16,
    width: '85%',
    padding: 24,
    alignItems: 'center',
    borderColor: '#B794F4',
    borderWidth: 1.5,
    elevation: 6,
  },
  iconCircle: {
    backgroundColor: '#B794F420',
    padding: 12,
    borderRadius: 50,
    marginBottom: 12,
  },
  text: {
    color: '#ccc',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
    color: '#FFD700',
  },
  acceptBtn: {
    backgroundColor: '#B794F4',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  acceptText: {
    color: '#000',
    fontWeight: 'bold',
  },
  declineBtn: {
    borderColor: '#B794F4',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  declineText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timer: {
    marginTop: 16,
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
