import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Gifts({ gifts = [], onGiftPress, editable = false }) {
  const TitleBox = () => (
    <LinearGradient
      colors={['#FFD700', '#222']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.innerBox}>
        <Text style={styles.title}>Gifts</Text>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.card}>
      <TitleBox />
      <View style={styles.giftRow}>
        {gifts.map((gift, index) => (
          <TouchableOpacity
            key={index}
            style={styles.giftBadge}
            onPress={() => editable && onGiftPress?.(gift)}
            activeOpacity={editable ? 0.7 : 1}
          >
            <Text style={styles.giftText}>
              {gift.icon} x{gift.count}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0b0b0c',
    marginHorizontal: 24,
    marginVertical: 14,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 1.5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  innerBox: {
    backgroundColor: '#1a1a1d',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
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
