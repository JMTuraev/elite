import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function Visitors({ count = 0, onPress }) {
  return (
    <LinearGradient
      colors={['#FFD700', '#000']} // Gold to black
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.borderWrapper}
    >
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        {/* Badge */}
        {count > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{count}</Text>
          </View>
        )}

        {/* Icon – orqa fon yo‘q */}
        <Ionicons name="footsteps-outline" size={28} color="#fff" style={styles.icon} />

        {/* Texts */}
        <Text style={styles.label}>Visitors</Text>
        <Text style={styles.linkText}>See More ›</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  borderWrapper: {
    borderRadius: 10,
    padding: 2,
    width: 84,
  },
  wrapper: {
    backgroundColor: '#0b0b0c',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 6,
    position: 'relative',
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  linkText: {
    fontSize: 11,
    color: '#888',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#e53935',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    zIndex: 3,
    minWidth: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
