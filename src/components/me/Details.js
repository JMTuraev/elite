import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({ details = [] }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Details</Text>
      {details.map((item, index) => (
        <Text key={index} style={styles.itemText}>• {item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    marginHorizontal: 24,
    marginVertical: 14,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  itemText: {
    color: '#bbb',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 2,
  },
});
