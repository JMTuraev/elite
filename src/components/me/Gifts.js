import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Gifts({ gifts = [], onGiftPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Gifts</Text>
      <View style={styles.giftRow}>
        {gifts.map((gift, index) => (
          <TouchableOpacity
            key={index}
            style={styles.giftBadge}
            onPress={() => onGiftPress?.(gift)}
          >
            <Text style={styles.giftText}>{gift.icon} x{gift.count}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    marginBottom: 8,
  },
  giftRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  giftBadge: {
    backgroundColor: '#2e2e33',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  giftText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
