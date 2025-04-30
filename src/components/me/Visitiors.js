import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Visitors({ count = 0, onPress }) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      {/* 🔴 Badge – border ustida o‘ng tepa burchakda */}
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}

      {/* 👣 Ikonka + Visitors (markazda, yonma-yon) */}
      <View style={styles.iconLabelBlock}>
        <Ionicons name="footsteps-outline" size={28} color="#fff" />
        <Text style={styles.label}>Visitors</Text>
      </View>

      {/* "See more" – aynan Visitors ostida */}
      <Text style={styles.seeMore}>See more</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1a1a1d',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 14,
    minWidth: 120,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#e53935',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  iconLabelBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  seeMore: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
    alignSelf: 'center',
  },
});
