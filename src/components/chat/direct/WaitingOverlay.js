import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function WaitingOverlay({ onExpire, duration = 15 * 60 }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onExpire();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const formatTime = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.title}>Request sent 💌</Text>
        <Text style={styles.desc}>
          She has 15 minutes to accept.{"\n"}
          If she doesn’t, your <Text style={styles.bold}>$12</Text> will be refunded and you’re free to connect with someone new.
        </Text>
        <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
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
    zIndex: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    width: '85%',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginTop: 12,
    fontWeight: '600',
  },
  desc: {
    color: '#ccc',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 12,
    lineHeight: 20,
  },
  bold: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
